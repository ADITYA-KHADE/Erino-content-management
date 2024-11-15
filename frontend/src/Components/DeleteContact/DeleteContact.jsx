import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const DeleteContact = ({ contactId, setDeleteModal, setReload }) => {
  const handleDelete = () => {
    // Mock API request to delete the contact
    fetch(`/api/contacts/${contactId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setReload((prev) => !prev); // Trigger reload in parent component
        setDeleteModal(false); // Close modal
      })
      .catch((err) => {
        console.error("Error deleting contact:", err);
      });
  };

  return (
    <Dialog open={true} onClose={() => setDeleteModal(false)} fullWidth maxWidth="xs">
      <DialogTitle>Delete Contact</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this contact? This action cannot be undone.
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDeleteModal(false)} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContact;
