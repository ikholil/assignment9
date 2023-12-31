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
exports.serviceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const service_service_1 = require("./service.service");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceList.createService(req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service created successfully",
        data: result
    });
}));
const getAllService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceList.getAllService(req.query);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Services retrieved successfully",
        meta: result.meta,
        data: result.data
    });
}));
// const getServicesByCategoryId = catchAsync(async (req: Request, res: Response) => {
//     const result = await serviceList.getServicesbyCategory(req.params.categoryId)
//     res.json({
//         success: true,
//         statusCode: httpStatus.OK,
//         message: "Service retrieved successfully",
//         data: result
//     })
// })
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceList.getSingleService(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service retrieved successfully",
        data: result
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceList.updateService(req.params.id, req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service updated successfully",
        data: result
    });
}));
const deleteService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceList.deleteService(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service deleted successfully",
        data: result
    });
}));
exports.serviceController = {
    createService, getAllService, getSingleService, updateService, deleteService
};
