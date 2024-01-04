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
exports.reviewController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const review_service_1 = require("./review.service");
const createReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const review = Object.assign(Object.assign({}, req.body), { userId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id });
    const result = yield review_service_1.reviewServices.createReview(review);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Review created successfully",
        data: result
    });
}));
const updateReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_service_1.reviewServices.updateReview(req.params.id, req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Review updated successfully",
        data: result
    });
}));
const deleteReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_service_1.reviewServices.deleteReview(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Review deleted successfully",
        data: result
    });
}));
exports.reviewController = {
    createReview, updateReview, deleteReview
};
