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
exports.profileController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const profile_service_1 = require("./profile.service");
const getSingleProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_service_1.profileServices.getSingleProfile(req.params.id);
    if (result) {
        res.json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Profile retrieved successfully",
            data: result
        });
    }
    else {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Profile Not Found",
        });
    }
}));
const updateProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_service_1.profileServices.updateProfile(req.params.id, req.body);
    if (result) {
        res.json({
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Profile Updated successfully",
            data: result
        });
    }
    else {
        res.json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Profile Update Failed",
        });
    }
}));
exports.profileController = {
    getSingleProfile, updateProfile
};
