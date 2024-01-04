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
exports.feedbackController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const feedback_service_1 = require("./feedback.service");
const createFeedback = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const feedbackData = Object.assign(Object.assign({}, req.body), { userId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id });
    const result = yield feedback_service_1.feedbackServices.createFeedback(feedbackData);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Feedback created successfully",
        data: result
    });
}));
const getAllFeedback = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield feedback_service_1.feedbackServices.getAllFeedback();
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Feedbacks retrieved successfully",
        data: result
    });
}));
const getSingleFeedback = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield feedback_service_1.feedbackServices.getSingleFeedback(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Feedbacks retrieved successfully",
        data: result
    });
}));
exports.feedbackController = {
    createFeedback, getAllFeedback, getSingleFeedback
};
