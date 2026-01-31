import express from "express";
import Feature from "../models/Feature.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const feature = await Feature.findOne().sort({ createdAt: -1 });
    res.json(feature);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch features" });
  }
});

router.post("/", async (req, res) => {
  try {
    const feature = await Feature.create(req.body);
    res.status(201).json(feature);
  } catch (error) {
    res.status(400).json({ message: "Failed to create features" });
  }
});

router.put("/", async (req, res) => {
  try {
    const feature = await Feature.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(feature);
  } catch (error) {
    res.status(400).json({ message: "Failed to update features" });
  }
});

export default router;
