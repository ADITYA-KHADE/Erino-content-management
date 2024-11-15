import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { toast } from "react-hot-toast";

const DeleteContact = ({ contactData, setDeleteModal, setReload }) => {
  const handleDelete = () => {
    fetch(`/api/contacts/${contactData._id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete contact.");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Contact deleted successfully!");
        setReload((prev) => !prev); 
        setDeleteModal(false);
      })
      .catch((err) => {
        toast.error("Error deleting contact.");
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
