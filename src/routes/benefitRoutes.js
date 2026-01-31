import express from "express";
import Benefit from "../models/Benefit.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const benefit = await Benefit.findOne({
      isActive: true
    }).sort({ createdAt: -1 });
    res.json(benefit);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch benefits section" });
  }
});






router.post("/", async (req, res) => {
  try {
    const benefit = await Benefit.create(req.body);
    res.status(201).json(benefit);
  } catch (error) {
    res.status(400).json({ message: "Failed to create benefits section" });
  }
});

router.put("/", async (req, res) => {
  try {
    const benefit = await Benefit.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(benefit);
  } catch (error) {
    res.status(400).json({ message: "Failed to update benefits section" });
  }
});

export default router;
