import express from 'express';
import { login, updateUserBooking, getUserBookings, signup } from '../controller/user.controller.js';

const router = express.Router();

// Route for login
router.post('/login', login);

// Route for updating user booking
router.put('/user/:email/booking', updateUserBooking);

// Route for getting user bookings
router.get('/user/:email/bookings', getUserBookings);

// Route for signup
router.post('/signup', signup);

export default router;
