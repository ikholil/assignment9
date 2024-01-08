import { z } from "zod";

const create = z.object({
    body: z.object({
        date: z.string({
            required_error: "Booking Date is Requierd"
        }),
        serviceId: z.string({
            required_error: "Service Id is Requierd"
        }),
    })
})


export const bookingValidation = {
    create
}