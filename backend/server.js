const express = require("express");
const app = express();
const path = require("path");
const cors =require("cors");


const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const mongodb = require("./config/connectdb");
mongodb();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const authRoute = require("./routes/authRoute");
// app.use("/api/auth", authRoute);



// app.use(express.static(path.join(__dirname, "../frontend", "dist")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
});
