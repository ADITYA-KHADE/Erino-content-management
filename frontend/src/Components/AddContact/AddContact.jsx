import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { toast } from "react-hot-toast";

const AddContact = () => {
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Contact added successfully!");
        setContactData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          company: "",
          jobtitle: "",
        });
      })
      .catch((err) => {
        toast.error("Error adding contact.");
        console.error(err);
      });
  };

  return (
    <div className="p-4 border-2 border-gray-600 max-w-screen-md mx-auto bg-gray-300">
      <h2 className="text-xl font-bold mb-4">Add New Contact</h2>

      <form onSubmit={handleSubmit} className="p-2 space-y-3">
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          name="firstname"
          value={contactData.firstname}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          name="lastname"
          value={contactData.lastname}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={contactData.email}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          name="phone"
          value={contactData.phone}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Company"
          variant="outlined"
          fullWidth
          name="company"
          value={contactData.company}
          onChange={handleChange}
          className="mb-4"
        />
        <TextField
          label="Job Title"
          variant="outlined"
          fullWidth
          name="jobtitle"
          value={contactData.jobtitle}
          onChange={handleChange}
          className="mb-4"
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Contact
        </Button>
      </form>
    </div>
  );
};

export default AddContact;
