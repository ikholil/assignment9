"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string({
            required_error: "Booking Date is Requierd"
        }),
        serviceId: zod_1.z.string({
            required_error: "Service Id is Requierd"
        }),
    })
});
exports.bookingValidation = {
    create
};
