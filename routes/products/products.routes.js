import express from 'express';
import { deleteProductController, getProductController, postProductController, putProductController } from '../../controllers/products/products.controller.js';

const router = express.Router();

// R - For Reading products
router.get("/", getProductController);

// C - For Creating products 
router.post("/", postProductController);

// U - For Updating products
router.put("/:id", putProductController);

// D - For Deleting product
router.delete("/:id", deleteProductController);

export default router