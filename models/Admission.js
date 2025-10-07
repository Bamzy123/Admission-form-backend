import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  fullName: { type: String, required: true },

  faculty: { type: String, required: true },

  department: { type: String, required: true },

  university: { type: String, required: true },

  whatsappNumber: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  
}, { timestamps: true });

export default mongoose.model("Admission", admissionSchema);