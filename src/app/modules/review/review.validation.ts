import { z } from "zod";

const create = z.object({
    body: z.object({
        comment: z.string({
            required_error: "Comment is Requierd"
        }),
        rating: z.number({
            required_error: "Rating is Requierd"
        }),
        serviceId: z.string({
            required_error: "Service Id is Requierd"
        }),
    })
})



export const reviewValidation = {
    create
}