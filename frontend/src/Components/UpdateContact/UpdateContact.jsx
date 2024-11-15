import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const UpdateContact = ({ contactData, setUpdateModal, setReload }) => {
  console.log(contactData)
  const [updatedData, setUpdatedData] = useState(contactData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    fetch(`/api/contacts/${updatedData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        setReload((prev) => !prev); // Trigger reload in parent component
        setUpdateModal(false); // Close modal
      })
      .catch((err) => {
        console.error("Error updating contact:", err);
      });
  };

  return (
    <Dialog
      open={true}
      onClose={() => setUpdateModal(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Update Contact</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          name="firstname"
          value={updatedData.firstname}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastname"
          value={updatedData.lastname}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={updatedData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={updatedData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Company"
          name="company"
          value={updatedData.company}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Job Title"
          name="jobtitle"
          value={updatedData.jobtitle}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setUpdateModal(false)} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleUpdate} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateContact;
