const User = require("../model/User");

const submitMultiStepForm = async (req, res) => {
  const { name, emailAddress, phoneNumber, plan, duration, addOns } = req.body;

  if (!name?.trim() || !emailAddress?.trim() || !phoneNumber?.trim()) {
    return res
      .status(400)
      .json({ message: "Name, email, and phone are required" });
  }

  try {
    const result = await User.create({
      name: name.trim(),
      emailAddress: emailAddress.trim(),
      phoneNumber: phoneNumber.trim(),
      plan,
      duration,
      addOns,
    });

    res.status(201).json({ message: "Multi-step form submitted successfully" });
  } catch (err) {
    console.error("Error saving multi-step form:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  submitMultiStepForm,
};
