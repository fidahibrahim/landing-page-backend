import mongoose from "mongoose";

const solutionSchema = new mongoose.Schema(
    {
        sectionTitle: String,
        sectionSubtitle: String,
        benefits: [{
            icon: String,
            title: String,
            description: String,
            order: Number
        }]
    }, { timestamps: true });

export default mongoose.model("Solution", solutionSchema);