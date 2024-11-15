import React, { useState, useEffect } from "react";
import DeleteContact from "../DeleteContact/DeleteContact";
import UpdateContact from "../UpdateContact/UpdateContact";
import NotFound from "../../Notfound.jsx";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [contactData, setContactData] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setContacts(data);
        } else {
          console.error("Error: API response is not an array");
          setContacts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setContacts([]);
      })
      .finally(() => setLoading(false));
  }, [reload]);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const totalPages = Math.ceil(contacts.length / contactsPerPage);

  const handleUpdate = (contact) => {
    setContactData(contact);
    setUpdateModal(true);
  };

  const handleDelete = (contact) => {
    setContactData(contact);
    setDeleteModal(true);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Contacts</h2>

      {loading ? (
        <div className="text-center py-4">Loading contacts...</div>
      ) : (
        <>
          <table className="min-w-full bg-blue-300 border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-100 text-center">
                <th className="px-4 py-2 ">Name</th>
                <th className="px-4 py-2 ">Email</th>
                <th className="px-4 py-2 ">Phone</th>
                <th className="px-4 py-2 ">Company</th>
                <th className="px-4 py-2">Job Title</th>
                <th className="px-4 py-2 ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.length > 0 ? (
                currentContacts.map((contact, index) => (
                  <tr key={contact.id || index} className="border-t">
                    <td className="px-4 py-2">{`${contact.firstname} ${contact.lastname}`}</td>
                    <td className="px-4 py-2">{contact.email}</td>
                    <td className="px-4 py-2">{contact.phone}</td>
                    <td className="px-4 py-2">{contact.company}</td>
                    <td className="px-4 py-2">{contact.jobtitle}</td>
                    <td className="px-4 py-2 text-center space-x-2">
                      <button
                        className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => handleUpdate(contact)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleDelete(contact)}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center px-4 py-2">
                    <NotFound />
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <Stack spacing={2} className="mt-4 justify-center items-center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </>
      )}

      {updateModal && (
        <UpdateContact
          contactData={contactData}
          setReload={setReload}
          setUpdateModal={setUpdateModal}
        />
      )}
      {deleteModal && (
        <DeleteContact
          contactData={contactData}
          setReload={setReload}
          setDeleteModal={setDeleteModal}
        />
      )}
    </div>
  );
};

export default AllContacts;
