import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Context } from 'hono'
import { verify } from 'hono/jwt'
//@ts-ignore
const userVerify = async (c:Context,next) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const token = c.req.header('authorization')
    if(!token){
        return c.json({"msg":"authoriztion failed"})
    }

    try {
        const tokenVerify = await verify(token,c.env.JWT_SECRET)
        if(tokenVerify.id){
            c.set("userId",tokenVerify.id)
           await next()
        }
        else{
            c.status(403)
            return c.json({
                "msg":"user unauthorized"
            })
        }
   
    } catch (error) {
        c.status(400)
        return c.json({error})
    }
}

export default userVerify;