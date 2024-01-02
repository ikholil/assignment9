import { z } from "zod";

export const loginZodSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: "Email is Requierd"
        }),
        password: z.string({
            required_error: "Password is Requierd"
        }),
    })
})
export const signUpZodSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is Requierd"
        }),
        email: z.string({
            required_error: "Email is Requierd"
        }),
        password: z.string({
            required_error: "Password is Requierd"
        }),
    })
})