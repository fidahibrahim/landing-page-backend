import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    badge: {
        icon: String,
        text: String,
        show: { type: Boolean, default: true }
    },
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
    dashboardPreview: {
        stats: [{
            label: String,
            value: String,
            valueColor: String
        }],
        recentSKUs: [String]
    }
}, { timestamps: true });

export default mongoose.model("Hero", heroSchema)