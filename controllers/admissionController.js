import Admission from "../models/Admission.js";

export const createAdmission = async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.status(201).json({
      message: "Form submitted successfully",
      admission,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
