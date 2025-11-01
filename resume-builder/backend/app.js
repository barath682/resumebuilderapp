const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5174",                       // for local dev
  "https://resumebuilderapp-beige.vercel.app"    // your Vercel frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));



app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/resume", require("./routes/resume"));

app.get("/", (req, res) => res.send("Resume Builder backend working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
