import z from "zod"

export const signupInput = z.object({
     email:z.string().email(),
     password:z.string().min(4),
     name:z.string().optional()
})

export type SignupInput= z.infer<typeof signupInput>


export const signinInput = z.object({
     email:z.string().email(),
     password:z.string().min(4),
     name:z.string().optional()
})

export type SigninInput= z.infer<typeof signinInput>


export const createBlogInput = z.object({
     title:z.string(),
     content:z.string()
})

export type CreateBlogInput= z.infer<typeof createBlogInput>

// write update blog input zod