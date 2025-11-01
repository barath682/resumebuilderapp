const express = require("express");
const router = express.Router();
const { saveResume, getUserResumes, getPublicResume } = require("../controllers/resumeController");
const authMiddleware = require("../middlewares/auth");

router.post("/", authMiddleware, saveResume);
router.get("/my", authMiddleware, getUserResumes);
router.get("/:id", getPublicResume);

module.exports = router;
