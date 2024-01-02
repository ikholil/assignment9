import { z } from "zod";

const create = z.object({
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

const update = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        password: z.string().optional(),
    })
})

export const userValidation = {
    create, update
}