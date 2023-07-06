
import express from 'express';
const router = express.Router();
import { processPayment } from '../Controller/paymentController.js';

router.post('/process-payment', processPayment);

export default router;