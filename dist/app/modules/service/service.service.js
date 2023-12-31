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
exports.serviceList = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.create({ data });
    return result;
});
const getAllService = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, sortBy, sortOrder, minPrice, maxPrice, search } = queries;
    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(size) || 10;
    const filters = {};
    // Apply filters based on query parameters
    if (minPrice) {
        filters.price = {
            gte: parseFloat(minPrice),
        };
    }
    if (maxPrice) {
        filters.price = Object.assign(Object.assign({}, (filters.price || {})), { lte: parseFloat(maxPrice) });
    }
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
                description: {
                    contains: search,
                    mode: 'insensitive',
                },
            },
        ];
    }
    const orderBy = {};
    // Apply sorting based on sortBy and sortOrder parameters
    if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder.toLowerCase();
    }
    const services = yield prisma_1.default.service.findMany({
        where: filters,
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy,
    });
    const totalServices = yield prisma_1.default.service.count({
        where: filters,
    });
    return {
        meta: {
            page: pageNumber,
            size: pageSize,
            total: totalServices,
            totalPage: Math.ceil(totalServices / pageSize),
        },
        data: services,
    };
});
// const getAllService = async (queries: queryOptions) => {
//     const { page, size, sortBy, sortOrder, minPrice, maxPrice, search } = queries;
//     const pageNumber = parseInt(page as string) || 1;
//     const pageSize = parseInt(size as string) || 10;
//     let filters:any = {};
//     // Apply filters based on query parameters
//     if (minPrice) {
//         filters.price = {
//             gte: parseFloat(minPrice),
//         };
//     }
//     if (maxPrice) {
//         filters.price = {
//             ...(filters.price || {}),
//             lte: parseFloat(maxPrice),
//         };
//     }
//     // Apply search filter
//     if (search) {
//         filters.OR = [
//             {
//                 title: {
//                     contains: search,
//                     mode: 'insensitive',
//                 },
//             },
//             {
//                 description: {
//                     contains: search,
//                     mode: 'insensitive',
//                 },
//             }
//         ];
//     }
//     const orderBy: any = {};
//     // Apply sorting based on sortBy and sortOrder parameters
//     if (sortBy && sortOrder) {
//         orderBy[sortBy] = sortOrder.toLowerCase();
//     }
//     const services = await prisma.service.findMany({
//         where: filters,
//         skip: (pageNumber - 1) * pageSize,
//         take: pageSize,
//         orderBy,
//     });
//     const totalServices = await prisma.service.count({
//         where: filters,
//     });
//     return {
//         meta: {
//             page: pageNumber,
//             size: pageSize,
//             total: totalServices,
//             totalPage: Math.ceil(totalServices / pageSize),
//         },
//         data: services,
//     }
// }
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findUnique({ where: { id } });
    return result;
});
// const getBooksbyCategory = async (categoryId: string) => {
//     console.log(categoryId)
//     const result = await prisma.service.findMany({ where: { categoryId } })
//     return result
// }
const updateService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.service.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'service Not Found');
    }
    const result = yield prisma_1.default.service.update({ where: { id }, data });
    return result;
});
const deleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.service.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'service Not Found');
    }
    const result = yield prisma_1.default.service.delete({ where: { id } });
    return result;
});
exports.serviceList = {
    getAllService, getSingleService, updateService, deleteService, createService
};
