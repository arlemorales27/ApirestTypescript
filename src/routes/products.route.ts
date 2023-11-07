import { Router } from "express";
import * as productsCtrl from "../controllers/product.controller";

const router = Router();

// GET all products
router.get("/", productsCtrl.getProducts);

// GET one product
router.get("/:id", productsCtrl.getProduct);

// POST create product
router.post("/", productsCtrl.createProduct);

// PUT update product
router.put("/:id", productsCtrl.updateProduct);

// DELETE product
router.delete("/:id", productsCtrl.deleteProduct);

export default router;
