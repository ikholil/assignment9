import { z } from "zod";

const create = z.object({
    body: z.object({
        question: z.string({
            required_error: "Faq question is Requierd"
        }),
        answer: z.string({
            required_error: "Faq answer is Requierd"
        }),
    })
})

const update = z.object({
    body: z.object({
        question: z.string().optional(),
        answer: z.string().optional(),
    })
})

export const faqValidation = {
    create, update
}