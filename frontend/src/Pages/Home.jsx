import React, { useState } from "react";
import AddContact from "../Components/AddContact/AddContact";
import AllContacts from "../Components/AllContacts/AllContacts";

const Home = () => {
  const [currentView, setCurrentView] = useState("AllContacts");

  return (
    <div className="p-2">
      <div className="flex space-x-5 mb-6 border-b justify-center items-center border-gray-200">
        <button
          className={`px-4 py-2 font-medium ${
            currentView === "AllContacts"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setCurrentView("AllContacts")}
        >
          View Contacts
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            currentView === "AddContact"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setCurrentView("AddContact")}
        >
          Add Contact
        </button>
      </div>

      <div className="mt-4">
        {currentView === "AllContacts" && <AllContacts />}
        {currentView === "AddContact" && <AddContact />}
      </div>
    </div>
  );
};

export default Home;
