import { z } from "zod";

const create = z.object({
    body: z.object({
        subject: z.string({
            required_error: "Feedback subject is Requierd"
        }),
        message: z.string({
            required_error: "Feedback Message is Requierd"
        }),
    })
})



export const feedbackValidation = {
    create
}