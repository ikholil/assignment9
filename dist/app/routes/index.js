"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const booking_route_1 = require("../modules/booking/booking.route");
const service_route_1 = require("../modules/service/service.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes 
    {
        path: "/users",
        route: user_route_1.userRouter
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRouter
    },
    {
        path: "/services",
        route: service_route_1.serviceRouter
    },
    {
        path: "/bookings",
        route: booking_route_1.bookingRouter
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
