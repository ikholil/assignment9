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
exports.profileServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getSingleProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.profile.findUnique({ where: { id } });
    return result;
});
const updateProfile = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.profile.findUnique({ where: { id } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Booking Not Found');
    }
    const result = yield prisma_1.default.profile.update({ where: { id }, data });
    return result;
});
exports.profileServices = {
    getSingleProfile, updateProfile
};
