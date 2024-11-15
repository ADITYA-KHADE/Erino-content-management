# Content Management System

## Overview

The Content Management System (CMS) is a full-stack application that allows users to manage their content efficiently. It includes both frontend and backend functionality:

- **Frontend**: Built with React and Material UI (MUI) for a modern and responsive user interface.
- **Backend**: Built with Node.js and Express, handling API requests to interact with the MongoDB database.
- **Database**: MongoDB is used to store and manage content data.

This project demonstrates the ability to create, read, update, and delete (CRUD) content, providing a user-friendly interface to manage content data in one centralized system.

## Features
- **Create Content**: Users can create new content by filling out a form.
- **Read Content**: All content can be listed and viewed in a paginated table.
- **Update Content**: Content can be edited and updated.
- **Delete Content**: Content can be deleted from the database.
- **Pagination**: A table view with pagination to display the content in manageable chunks.
- **Material UI**: The UI uses Material UI components for a clean and modern design.

## Mongodb schema
```javascript
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

```



## Setup Instructions

### 1. Clone the Repository

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/ADITYA-KHADE/Erino-content-management.git
cd Erino-content-management
```

## 2. Add ENV file 

Create a `.env` file in the root directory of the project and  add the following environment variables:

```plaintext
MONGODB_URI=your_mongodb_connection_string
PORT=your_desired_port_number

```

Replace `your_mongodb_connection_string` and `your_desired_port_number` with your actual MongoDB connection string, desired port number, and JWT secret key respectively.

## 3. Install Dependencies, built dist folder and start application

run this command at terminal

```bash
npm run build
npm run start
```
