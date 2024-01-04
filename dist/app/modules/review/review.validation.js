"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        comment: zod_1.z.string({
            required_error: "Comment is Requierd"
        }),
        rating: zod_1.z.number({
            required_error: "Rating is Requierd"
        }),
        serviceId: zod_1.z.string({
            required_error: "Service Id is Requierd"
        }),
    })
});
exports.reviewValidation = {
    create
};
