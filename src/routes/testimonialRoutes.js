import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const testimonial = await Testimonial.findOne({
      isActive: true
    }).sort({ createdAt: -1 });
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch testimonials" });
  }
});

router.post("/", async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: "Failed to create testimonials" });
  }
});

router.put("/", async (req, res) => {
  try {
    const testimonial = await Testimonial.findOneAndUpdate(
      {},
      req.body,
      { new: true, sort: { createdAt: -1 } }
    );
    res.json(testimonial);
  } catch (error) {
    res.status(400).json({ message: "Failed to update testimonials" });
  }
});

export default router;
