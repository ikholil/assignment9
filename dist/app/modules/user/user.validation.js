"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is Requierd"
        }),
        email: zod_1.z.string({
            required_error: "Email is Requierd"
        }),
        password: zod_1.z.string({
            required_error: "Password is Requierd"
        }),
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
    })
});
exports.userValidation = {
    create, update
};
