import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema({
  sectionTitle: String,
  sectionSubtitle: String,
  isActive: {
    type: Boolean,
    default: true
  },
  plans: [{
    name: String,
    price: String,
    currency: { type: String, default: 'USD' },
    billingPeriod: { type: String, default: 'month' },
    description: String,
    features: [String],
    ctaText: String,
    ctaLink: String,
    isPopular: { type: Boolean, default: false },
    order: Number
  }]
}, { timestamps: true });

export default mongoose.model("Price", pricingSchema);