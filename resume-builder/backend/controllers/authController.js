const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Missing fields" });

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(409).json({ message: "Email already registered" });

    const user = await User.create({ email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ user: { email: user.email, _id: user._id }, token });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await user.comparePassword(password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ user: { email: user.email, _id: user._id }, token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
