import express from "express"
import cors from "cors"
import navigationRoutes from "./routes/navigationRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";
import solutionRoutes from "./routes/solutionRoutes.js";
import featureRoutes from "./routes/featureRoutes.js";
import howItWorksRoutes from "./routes/howItWorksRoutes.js";
import benefitRoutes from "./routes/benefitRoutes.js";
import pricingRoutes from "./routes/pricingRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import finalCtaRoutes from "./routes/finalCtaRoutes.js";
import footerRoutes from "./routes/footerRoutes.js";


const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use("/api/navigation", navigationRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/problem", problemRoutes);
app.use("/api/solution", solutionRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/how-it-works", howItWorksRoutes);
app.use("/api/benefits", benefitRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/final-cta", finalCtaRoutes);
app.use("/api/footer", footerRoutes);


export default app