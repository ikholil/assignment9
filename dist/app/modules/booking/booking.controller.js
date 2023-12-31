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
exports.bookingController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const booking_service_1 = require("./booking.service");
const createBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const bookingData = Object.assign(Object.assign({}, req.body), { userId: user === null || user === void 0 ? void 0 : user.id });
    const result = yield booking_service_1.bookingServiceList.createBooking(bookingData);
    if (typeof (result) === "string") {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Serivce Not Found"
        });
    }
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Booking created successfully",
        data: result
    });
}));
const getAllBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.bookingServiceList.getAllBooking(req.query);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Bookings retrieved successfully",
        meta: result.meta,
        data: result.data
    });
}));
const getSingleBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.bookingServiceList.getSingleBooking(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Booking retrieved successfully",
        data: result
    });
}));
const updateBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.bookingServiceList.updateBooking(req.params.id, req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Booking updated successfully",
        data: result
    });
}));
const deleteBooking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_service_1.bookingServiceList.deleteBooking(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Booking deleted successfully",
        data: result
    });
}));
exports.bookingController = {
    createBooking, getAllBooking, getSingleBooking, updateBooking, deleteBooking
};
