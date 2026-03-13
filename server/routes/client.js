import express from "express";
import {
  // Setup import product
  getProducts,
  // Setup import Customers
  getCustomers,
  // getTransactions,
  // getGeography,
} from "../controllers/client.js";

const router = express.Router();

// Setup router to getProduct
router.get("/products", getProducts);
// Setup router to getCustomers
router.get("/customers", getCustomers);

// router.get("/transactions", getTransactions);
// router.get("/geography", getGeography);

export default router;