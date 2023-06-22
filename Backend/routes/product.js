import express from 'express';
import { getAllProducts, postAllProducts } from '../Controller/productControl.js';


const router = express.Router();

// GET /api/products
router.get('/', getAllProducts);

// POST /api/products
router.post('/', postAllProducts);
console.log("posting all product"); 


export default router;
