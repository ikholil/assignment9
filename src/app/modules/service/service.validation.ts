import { z } from "zod";

const create = z.object({
    body: z.object({
        title: z.string({
            required_error: "Service Title is Requierd"
        }),
        price: z.number({
            required_error: "Service price is Requierd"
        }),
        description: z.string({
            required_error: "Service description is Requierd"
        }),
    })
})

const update = z.object({
    body: z.object({
        title: z.string().optional(),
        price: z.number().optional(),
        description: z.string().optional(),
    })
})

export const serviceValidation = {
    create, update
}