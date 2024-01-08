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
exports.bookingServiceList = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBooking = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = data;
    const service = yield prisma_1.default.service.findUnique({ where: { id: serviceId } });
    if (!service) {
        return "Service Not Found";
    }
    const result = yield prisma_1.default.booking.create({ data });
    return result;
});
const getAllBooking = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, sortBy, sortOrder } = queries;
    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(size) || 10;
    const orderBy = {};
    // Apply sorting based on sortBy and sortOrder parameters
    if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder.toLowerCase();
    }
    const bookings = yield prisma_1.default.booking.findMany({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy,
    });
    const totalBookings = yield prisma_1.default.booking.count();
    return {
        meta: {
            page: pageNumber,
            size: pageSize,
            total: totalBookings,
            totalPage: Math.ceil(totalBookings / pageSize),
        },
        data: bookings,
    };
});
const getSingleBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.findUnique({ where: { id } });
    return result;
});
const getUserBookings = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.booking.findMany({ where: { userId: id } });
    return result;
});
// const getBooksbyCategory = async (categoryId: string) => {
//     console.log(categoryId)
//     const result = await prisma.booking.findMany({ where: { categoryId } })
//     return result
// }
const updateBooking = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.booking.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Booking Not Found');
    }
    const result = yield prisma_1.default.booking.update({ where: { id }, data });
    return result;
});
const deleteBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.booking.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Booking Not Found');
    }
    const result = yield prisma_1.default.booking.delete({ where: { id } });
    return result;
});
exports.bookingServiceList = {
    getAllBooking, getSingleBooking, updateBooking, deleteBooking, createBooking, getUserBookings
};
