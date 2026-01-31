import express from "express";
import Faq from "../models/Faq.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const faq = await Faq.findOne({
      isActive: true
    }).sort({ createdAt: -1 });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch FAQs" });
  }
});

router.post("/", async (req, res) => {
  try {
    const faq = await Faq.create(req.body);
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ message: "Failed to create FAQs" });
  }
});

router.put("/", async (req, res) => {
  try {
    const faq = await Faq.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(faq);
  } catch (error) {
    res.status(400).json({ message: "Failed to update FAQs" });
  }
});

export default router;
