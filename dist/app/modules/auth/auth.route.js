"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post("/signup", (0, validateRequest_1.default)(auth_validation_1.signUpZodSchema), auth_controller_1.authController.signUp);
router.post("/signin", (0, validateRequest_1.default)(auth_validation_1.loginZodSchema), auth_controller_1.authController.signIn);
exports.AuthRouter = router;
