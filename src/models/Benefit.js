import mongoose from "mongoose";

const benefitsSchema = new mongoose.Schema({
  sectionTitle: String,
  sectionSubtitle: String,
  backgroundColor: String,
  isActive: {
    type: Boolean,
    default: true
  },
  benefits: [{
    stat: String,
    label: String,
    description: String,
    order: Number
  }]
}, { timestamps: true });

export default mongoose.model("Benefit", benefitsSchema);

