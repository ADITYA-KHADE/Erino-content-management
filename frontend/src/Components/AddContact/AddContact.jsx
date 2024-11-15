import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";

const AddContact = () => {
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock API request (replace with actual API request)
    fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then(() => {
        setSnackbarMessage("Contact added successfully!");
        setOpenSnackbar(true);
        // Reset form after submit
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
        setSnackbarMessage("Error adding contact.");
        setOpenSnackbar(true);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New Contact</h2>

      <form onSubmit={handleSubmit}>
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarMessage.includes("Error") ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddContact;
