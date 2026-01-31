import mongoose from "mongoose";

const navigationSchema = new mongoose.Schema({
    logo: {
        icon: String,
        text: String
    },
    menuItems: [{
        label: String,
        href: String,
        order: Number
    }],
    ctaButton: {
        text: String,
        style: String
    }
}, { timestamps: true });

export default mongoose.model("Navigation", navigationSchema)