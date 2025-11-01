const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  template: { type: String, required: true }, // "one", "two", "three"
  data: {
    personal: { name: String, email: String, phone: String },
    education: { degree: String, institution: String, year: String },
    experience: { description: String },
    skills: String
  },
  publicId: { type: String, unique: true } // For public sharing
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);
