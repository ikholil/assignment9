"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faqValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string({
            required_error: "Faq question is Requierd"
        }),
        answer: zod_1.z.string({
            required_error: "Faq answer is Requierd"
        }),
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string().optional(),
        answer: zod_1.z.string().optional(),
    })
});
exports.faqValidation = {
    create, update
};
