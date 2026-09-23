import express from "express";
import expensesController from "../controller/expenses.controller.js";

const router = express.Router();

router.post("/", expensesController.createExpense);
router.get("/pending", expensesController.getPendingExpenses);
router.put("/:id/approve", expensesController.approveExpense);

export default router;