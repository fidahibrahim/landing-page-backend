import express from "express";
import Price from "../models/Price.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pricing = await Price.findOne({
      isActive: true
    }).sort({ createdAt: -1 });
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch pricing" });
  }
});

router.post("/", async (req, res) => {
  try {
    const pricing = await Price.create(req.body);
    res.status(201).json(pricing);
  } catch (error) {
    res.status(400).json({ message: "Failed to create pricing" });
  }
});

router.put("/", async (req, res) => {
  try {
    const pricing = await Price.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(pricing);
  } catch (error) {
    res.status(400).json({ message: "Failed to update pricing" });
  }
});

export default router;
