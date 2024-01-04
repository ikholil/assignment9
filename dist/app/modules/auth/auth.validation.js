"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpZodSchema = exports.loginZodSchema = void 0;
const zod_1 = require("zod");
exports.loginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is Requierd"
        }),
        password: zod_1.z.string({
            required_error: "Password is Requierd"
        }),
    })
});
exports.signUpZodSchema = zod_1.z.object({
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
