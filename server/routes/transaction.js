import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (_, res) => {
  try {
    const transactions = await Transaction.find().limit(20).sort({ createdOn: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
})

export default router;
