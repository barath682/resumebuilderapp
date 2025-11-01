const Resume = require("../models/Resume");
const crypto = require("crypto");

// Save or update resume
exports.saveResume = async (req, res) => {
  try {
    const { template, data, id } = req.body;
    let resume;
    if (id) { // Update
      resume = await Resume.findOneAndUpdate(
        { _id: id, user: req.user.id },
        { template, data },
        { new: true }
      );
    } else { // Create
      const publicId = crypto.randomBytes(8).toString("hex");
      resume = await Resume.create({ user: req.user.id, template, data, publicId });
    }
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Failed to save resume", error: err.message });
  }
};

// Get logged-in user's resumes
exports.getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get resumes", error: err.message });
  }
};

// Get public resume by public id for sharing
exports.getPublicResume = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findOne({ publicId: id });
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: "Failed to get resume", error: err.message });
  }
};
