"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const review_controller_1 = require("./review.controller");
const review_validation_1 = require("./review.validation");
const router = express_1.default.Router();
router.post('/create-review', (0, validateRequest_1.default)(review_validation_1.reviewValidation.create), (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), review_controller_1.reviewController.createReview);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), review_controller_1.reviewController.updateReview);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), review_controller_1.reviewController.deleteReview);
exports.reviewRouter = router;
