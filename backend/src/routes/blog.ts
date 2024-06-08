import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import userVerify from "../middleware/userMiddleware";

const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>()

blogRouter.use("/*",userVerify)

blogRouter.post("/write",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    console.log(body.title)
    try {
        const blog = await prisma.post.create({
            data:{
                title:body.title,
                content: body.content,
                authorId:c.get("userId"),
                publishedDate:body.publishedDate
            }
        })
        return c.json({"msg":"blog created",
            blog
        })
    } catch (error) {
        return c.json({error})
    }
})
blogRouter.put("/update",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    try {
        prisma.post.update({
            where: {
                id: body.id,
                authorId: c.get('userId')
            },
            data: {
                title: body.title,
                content: body.content
            }
        });
        return c.json({"msg":"updated"})
    } catch (error) {
        c.status(400)
        return c.json({error})
    }

})
blogRouter.get("/get/:id",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const id = c.req.param("id")
    if(!id){
        return c.json({"msg":"enter id"})
    }
    else{
        const blog = await prisma.post.findUnique({
            where:{
                id:id
            },
            
        })
        return c.json({blog})
    }

})
blogRouter.get("/bulk",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
    const blogs =await prisma.post.findMany({
        select:{
            title:true,
            content:true,
            id:true,
            publishedDate:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
        c.status(200)
        return c.json({
            blogs
        })
    } catch (error) {
        c.status(200)
        return c.json({error})
    }

})

export default blogRouter