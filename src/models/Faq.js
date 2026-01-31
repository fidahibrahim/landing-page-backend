import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  sectionTitle: String,
  sectionSubtitle: String,
  faqs: [{
    question: String,
    answer: String,
    order: Number
  }]
}, { timestamps: true });

export default mongoose.model("Faq", faqSchema);
