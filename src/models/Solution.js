import mongoose from "mongoose";

const solutionSchema = new mongoose.Schema(
    {
        sectionTitle: String,
        sectionSubtitle: String,
        isActive: {
            type: Boolean,
            default: true
        },
        benefits: [{
            icon: String,
            title: String,
            description: String,
            order: Number
        }]
    }, { timestamps: true });

export default mongoose.model("Solution", solutionSchema);