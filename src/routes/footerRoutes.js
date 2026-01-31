import express from "express";
import Footer from "../models/Footer.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const footer = await Footer.findOne().sort({ createdAt: -1 });
        res.json(footer);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch footer" });
    }
});

router.post("/", async (req, res) => {
    try {
        const footer = await Footer.create(req.body);
        res.status(201).json(footer);
    } catch (error) {
        res.status(400).json({ message: "Failed to create footer" });
    }
});

router.put("/", async (req, res) => {
    try {
        const footer = await Footer.findOneAndUpdate(
            {},
            req.body,
            { new: true, sort: { createdAt: -1 } }
        );
        res.json(footer);
    } catch (error) {
        res.status(400).json({ message: "Failed to update footer" });
    }
});

export default router;
