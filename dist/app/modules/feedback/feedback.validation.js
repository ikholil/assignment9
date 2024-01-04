"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        subject: zod_1.z.string({
            required_error: "Feedback subject is Requierd"
        }),
        message: zod_1.z.string({
            required_error: "Feedback Message is Requierd"
        }),
    })
});
exports.feedbackValidation = {
    create
};
