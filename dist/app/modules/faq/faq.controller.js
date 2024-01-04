"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const faq_service_1 = require("./faq.service");
const createFaq = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faq_service_1.faqServiceList.createFaq(req.body);
    if (typeof (result) === "string") {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Faq Not Found"
        });
    }
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Faq created successfully",
        data: result
    });
}));
const getAllFaq = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faq_service_1.faqServiceList.getAllFaq();
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Faqs retrieved successfully",
        data: result
    });
}));
const updateFaq = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faq_service_1.faqServiceList.updateFaq(req.params.id, req.body);
    if (result) {
        res.json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Faq Updated successfully",
            data: result
        });
    }
    else {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Faq Not Found",
        });
    }
}));
const deleteFaq = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faq_service_1.faqServiceList.deleteFaq(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Faq deleted successfully",
        data: result
    });
}));
exports.FaqController = {
    createFaq, getAllFaq, updateFaq, deleteFaq
};
