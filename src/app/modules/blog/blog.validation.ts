import { z } from "zod";

const create = z.object({
    body: z.object({
        title: z.string({
            required_error: "Blog Title is Requierd"
        }),
        content: z.string({
            required_error: "Blog Content is Requierd"
        }),
    })
})

const update = z.object({
    body: z.object({
        title: z.string().optional(),
        content: z.string().optional(),
    })
})

export const blogValidation = {
    create, update
}