import mongoose from "mongoose";

const featuresSchema = new mongoose.Schema({
    sectionTitle: String,
    sectionSubtitle: String,
    features: [{
        icon: String,
        title: String,
        description: String,
        order: Number
    }]
}, { timestamps: true });

export default mongoose.model("Feature", featuresSchema);