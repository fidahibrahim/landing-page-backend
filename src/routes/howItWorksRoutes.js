import express from "express";
import HowItWork from "../models/HowItWork.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await HowItWork.findOne({
      isActive: true
    }).sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch how it works section" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await HowItWork.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Failed to create how it works section" });
  }
});

router.put("/", async (req, res) => {
  try {
    const data = await HowItWork.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Failed to update how it works section" });
  }
});

export default router;
