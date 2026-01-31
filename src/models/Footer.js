import mongoose from "mongoose";

const footerSchema = new mongoose.Schema({
    logo: {
        icon: String,
        text: String
    },
    description: String,
    sections: [{
        title: String,
        links: [{
            label: String,
            href: String
        }],
        order: Number
    }],
    socialLinks: [{
        platform: String, 
        url: String,
        icon: String
    }],
    copyright: String
}, { timestamps: true });

export default mongoose.model("Footer", footerSchema);