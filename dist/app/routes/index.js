"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const blog_route_1 = require("../modules/blog/blog.route");
const booking_route_1 = require("../modules/booking/booking.route");
const faq_route_1 = require("../modules/faq/faq.route");
const feedback_route_1 = require("../modules/feedback/feedback.route");
const profile_route_1 = require("../modules/profile/profile.route");
const review_route_1 = require("../modules/review/review.route");
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
    {
        path: "/profile",
        route: profile_route_1.profileRouter
    },
    {
        path: "/reviews",
        route: review_route_1.reviewRouter
    },
    {
        path: "/feedbacks",
        route: feedback_route_1.feedbackRouter
    },
    {
        path: "/faqs",
        route: faq_route_1.faqRouter
    },
    {
        path: "/blogs",
        route: blog_route_1.blogRouter
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
