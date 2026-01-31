import express from "express";
import Problem from "../models/Problem.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const problem = await Problem.findOne({
          isActive: true
        }).sort({ createdAt: -1 });
        res.json(problem);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch problem section" });
    }
});

router.post("/", async (req, res) => {
    try {
        const problem = await Problem.create(req.body);
        res.status(201).json(problem);
    } catch (error) {
        res.status(400).json({ message: "Failed to create problem section" });
    }
});

router.put("/", async (req, res) => {
  try {
    const problem = await Problem.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(problem);
  } catch (error) {
    res.status(400).json({ message: "Failed to update problem section" });
  }
});

export default router;