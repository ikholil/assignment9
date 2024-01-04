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
exports.blogServiceList = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.create({ data });
    return result;
});
const getAllBlog = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, sortBy, sortOrder, search } = queries;
    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(size) || 10;
    const orderBy = {};
    // Apply sorting based on sortBy and sortOrder parameters
    if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder.toLowerCase();
    }
    const filters = {};
    // Apply filters based on query parameters
    // Apply search filter
    if (search) {
        filters.OR = [
            {
                title: {
                    contains: search,
                    mode: 'insensitive',
                },
            },
            {
                content: {
                    contains: search,
                    mode: 'insensitive',
                },
            },
        ];
    }
    const Blogs = yield prisma_1.default.blog.findMany({
        where: filters,
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy,
    });
    const totalBlogs = yield prisma_1.default.blog.count({ where: filters });
    return {
        meta: {
            page: pageNumber,
            size: pageSize,
            total: totalBlogs,
            totalPage: Math.ceil(totalBlogs / pageSize),
        },
        data: Blogs,
    };
});
const getSingleBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.blog.findUnique({ where: { id } });
    return result;
});
const updateBlog = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.blog.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog Not Found');
    }
    const result = yield prisma_1.default.blog.update({ where: { id }, data });
    return result;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.blog.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Blog Not Found');
    }
    const result = yield prisma_1.default.blog.delete({ where: { id } });
    return result;
});
exports.blogServiceList = {
    getAllBlog, getSingleBlog, updateBlog, deleteBlog, createBlog
};
