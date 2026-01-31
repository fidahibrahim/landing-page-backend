import mongoose from "mongoose";

const finalCTASchema = new mongoose.Schema({
  headline: String,
  subheadline: String,
  primaryCTA: {
    text: String,
    link: String
  },
  secondaryCTA: {
    text: String,
    link: String
  },
  disclaimer: String,
  backgroundColor: String 
}, { timestamps: true });


export default mongoose.model("FinalCTA", finalCTASchema);

