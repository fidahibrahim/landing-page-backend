import express from "express";
import Solution from "../models/Solution.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const solution = await Solution.findOne({
      isActive: true
    }).sort({ createdAt: -1 });
    res.json(solution);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch solution" });
  }
});

router.post("/", async (req, res) => {
  try {
    const solution = await Solution.create(req.body);
    res.status(201).json(solution);
  } catch (error) {
    res.status(400).json({ message: "Failed to create solution" });
  }
});

router.put("/", async (req, res) => {
  try {
    const solution = await Solution.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(solution);
  } catch (error) {
    res.status(400).json({ message: "Failed to update solution" });
  }
});

export default router;