require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error", err));

// Routes
app.use("/api/auth", require("./routes/authRoutes")); 

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
