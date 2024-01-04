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
exports.blogController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const blog_service_1 = require("./blog.service");
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const blogData = Object.assign(Object.assign({}, req.body), { authorId: user === null || user === void 0 ? void 0 : user.id });
    const result = yield blog_service_1.blogServiceList.createBlog(blogData);
    if (typeof (result) === "string") {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Blog Not Found"
        });
    }
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Blog created successfully",
        data: result
    });
}));
const getAllBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.blogServiceList.getAllBlog(req.query);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "blogs retrieved successfully",
        meta: result.meta,
        data: result.data
    });
}));
const getSingleBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.blogServiceList.getSingleBlog(req.params.id);
    if (result) {
        res.json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Blog retrieved successfully",
            data: result
        });
    }
    else {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Blog Not Found",
        });
    }
}));
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.blogServiceList.updateBlog(req.params.id, req.body);
    if (result) {
        res.json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Blog Updated successfully",
            data: result
        });
    }
    else {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Blog Not Found",
        });
    }
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.blogServiceList.deleteBlog(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Blog deleted successfully",
        data: result
    });
}));
exports.blogController = {
    createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog
};
