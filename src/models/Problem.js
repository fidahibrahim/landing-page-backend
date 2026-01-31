import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
    {
        sectionTitle: String,
        sectionSubtitle: String,
        isActive: {
            type: Boolean,
            default: true
        },
        problems: [{
            icon: String,
            title: String,
            description: String,
            order: Number
        }]
    }, { timestamps: true });

export default mongoose.model("Problem", problemSchema);