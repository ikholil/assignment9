"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Service Title is Requierd"
        }),
        price: zod_1.z.number({
            required_error: "Service price is Requierd"
        }),
        description: zod_1.z.string({
            required_error: "Service description is Requierd"
        }),
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        description: zod_1.z.string().optional(),
    })
});
exports.serviceValidation = {
    create, update
};
