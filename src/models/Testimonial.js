import mongoose from "mongoose";

const testimonialsSchema = new mongoose.Schema({
  sectionTitle: String,
  sectionSubtitle: String,
  testimonials: [{
    quote: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
    author: {
      name: String,
      role: String,
      company: String,
      avatar: String 
    },
    order: Number
  }]
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialsSchema);