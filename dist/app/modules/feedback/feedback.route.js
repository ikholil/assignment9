"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const feedback_controller_1 = require("./feedback.controller");
const feedback_validation_1 = require("./feedback.validation");
const router = express_1.default.Router();
router.post('/create-feedback', (0, validateRequest_1.default)(feedback_validation_1.feedbackValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), feedback_controller_1.feedbackController.createFeedback);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), feedback_controller_1.feedbackController.getAllFeedback);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), feedback_controller_1.feedbackController.getSingleFeedback);
exports.feedbackRouter = router;
