import express from "express"
import Hero from "../models/Hero.js"

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const hero = await Hero.findOne().sort({ createdAt: -1 });
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch hero" });
    }
});

router.post("/", async(req, res) => {
    try {
        const hero = await Hero.create(req.body);
        res.status(201).json(hero);
    } catch (error) {
        res.status(400).json({ message: "Failed to create hero" });
    }
});

router.put("/", async(req, res) => {
    try {
        const hero = await Hero.findOneAndUpdate(
            {},
            req.body,
            { new: true, sort: { createdAt: -1 } }
        );
        res.json(hero);
    } catch (error) {
        res.status(400).json({ message: "Failed to update hero" });
    }
})

export default router;