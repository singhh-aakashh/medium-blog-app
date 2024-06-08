import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt";
import { signupInput,signinInput } from "@singhh-aakashh/medium-common";



const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();

userRouter.post("/signup",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body =await c.req.json();
    const {success} = signupInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({"msg":"inputs are wrong"})
    }

    try {
        const user = await prisma.user.create({
            data:{
                email:body.email,
                password:body.password,
                name:body.name || null
            }
        })
        const token = await sign({id:user.id},c.env.JWT_SECRET)
        c.status(200)
            return c.json({name:body.name,token})
            
    } catch (error) {
        c.status(403)
        return c.json({"msg":"not signed up credentials should be unique",error})
    }
})

userRouter.post("/signin",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = signinInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            "msg":"wrong credentials"
        })
    }
    try {
        const userCheck=await prisma.user.findUnique({
            where:{
                email:body.email,
                password:body.password
            }
        })
        if(!userCheck){
            c.status(404)
            return c.json({"msg":"credentials are wrong"})
        }
        else{
            c.status(200)
            const token = await sign({id:userCheck.id},c.env.JWT_SECRET)
            return c.json({name:userCheck.name,token})
        }
    } catch (error) {
        c.status(200)
        return c.json({error})
        }
})

userRouter.get("/allusers",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const users =await prisma.user.findMany({})
        c.status(200)
        return c.json({users})
    } catch (error) {
        return c.json({error})
    }
})

export default userRouter