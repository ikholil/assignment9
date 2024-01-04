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
exports.userController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const AddUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_service_1.userService.createUser(req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User Created successfully",
        data: result
    });
}));
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.getAllUser();
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "users retrieved successfully",
        data: result
    });
}));
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.getSingleUser(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "user retrieved successfully",
        data: result
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.updateUser(req.params.id, req.body);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "user updated successfully",
        data: result
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.deleteUser(req.params.id);
    res.json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "user deleted successfully",
        data: result
    });
}));
exports.userController = {
    AddUser, getAllUser, getSingleUser, updateUser, deleteUser
};
