import express from 'express';
import { getAccount,postAccount } from '../Controller/accountController.js';

const router = express.Router();

router.get("/",getAccount)

//create account
router.post("/",postAccount)

export default router;