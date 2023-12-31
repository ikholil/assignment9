"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const booking_controller_1 = require("./booking.controller");
const router = express_1.default.Router();
router.post('/create-booking', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), booking_controller_1.bookingController.createBooking);
router.get('/', booking_controller_1.bookingController.getAllBooking);
router.get('/:id', booking_controller_1.bookingController.getSingleBooking);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER, user_1.ENUM_USER_ROLE.SUPER_ADMIN), booking_controller_1.bookingController.updateBooking);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER, user_1.ENUM_USER_ROLE.SUPER_ADMIN), booking_controller_1.bookingController.deleteBooking);
exports.bookingRouter = router;