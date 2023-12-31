import express from 'express';
import { AuthRouter } from '../modules/auth/auth.route';
import { bookingRouter } from '../modules/booking/booking.route';
import { profileRouter } from '../modules/profile/profile.route';
import { reviewRouter } from '../modules/review/review.route';
import { serviceRouter } from '../modules/service/service.route';
import { userRouter } from '../modules/user/user.route';
const router = express.Router();

const moduleRoutes = [
  // ... routes 
  {
    path: "/users",
    route: userRouter
  },
  {
    path: "/auth",
    route: AuthRouter
  },
  {
    path: "/services",
    route: serviceRouter
  },
  {
    path: "/bookings",
    route: bookingRouter
  },
  {
    path: "/profile",
    route: profileRouter
  },
  {
    path: "/review",
    route: reviewRouter
  }

];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
