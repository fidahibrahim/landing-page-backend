import express from "express"
import Navigation from "../models/Navigation.js"

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const navigation = await Navigation.findOne().sort({ createdAt: -1 });
        res.json(navigation);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch navigation" })
    }
});

router.post("/", async(req, res) => {
    try {
        const navigation = await Navigation.create(req.body);
        res.status(201).json(navigation);
    } catch (error) {
        res.status(400).json({ message: "Failed to create navigation" });
    }
});

router.put("/", async (req, res) => {
    try {
        const updateNavigation = await Navigation.findOneAndUpdate(
            {},
            req.body,
            { new: true, sort: { createdAt: -1 } }
        );

        res.json(updateNavigation)
    } catch (error) {
        res.status(400).json({ message: "Failed to update navigation" });
    }
})

export default router;