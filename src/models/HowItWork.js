import mongoose from "mongoose";

const howItWorksSchema = new mongoose.Schema({
  sectionTitle: String,
  sectionSubtitle: String,
  isActive: {
    type: Boolean,
    default: true
  },
  steps: [{
    number: String,
    title: String,
    description: String,
    order: Number
  }]
}, { timestamps: true });

export default mongoose.model("HowItWork", howItWorksSchema);
