import express from 'express';
import { getTrains, getPnrStatus } from '../controller/train.controller.js'; // Import controller functions

const router = express.Router();

// Define a route to get train information
router.get('/trains', getTrains);

// Define a route to get PNR status
router.get('/pnr-status', getPnrStatus);

export default router;
