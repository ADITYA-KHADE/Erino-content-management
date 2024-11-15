const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    company: { type: String },
    jobtitle: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
