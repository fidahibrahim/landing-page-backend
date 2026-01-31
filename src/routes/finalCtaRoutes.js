import express from "express";
import FinalCTA from "../models/FinalCTA.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const cta = await FinalCTA.findOne({
            isActive: true
        }).sort({ createdAt: -1 });
        res.json(cta);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch final CTA" });
    }
});

router.post("/", async (req, res) => {
    try {
        const cta = await FinalCTA.create(req.body);
        res.status(201).json(cta);
    } catch (error) {
        res.status(400).json({ message: "Failed to create final CTA" });
    }
});

router.put("/", async (req, res) => {
    try {
        const cta = await FinalCTA.findOneAndUpdate(
            {},
            req.body,
            { new: true, sort: { createdAt: -1 } }
        );
        res.json(cta);
    } catch (error) {
        res.status(400).json({ message: "Failed to update final CTA" });
    }
});

export default router;
