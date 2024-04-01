const PORT = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/connectdb");
const path = require('path');

connectDB();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

app.use("/register", require("./routes/auth/register"));
app.use("/login", require("./routes/auth/login"));
app.use("/profile", require("./routes/profile"));
app.use("/logout", require("./routes/logout"));
app.use("/upload-by-link",require("./routes/uploadByLink"))
mongoose.connection.once("open", () => {
  console.log("Database Connected");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
