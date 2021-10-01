const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//port
const port = process.env.PORT || 8800;

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(console.log("connected to DB"));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/posts", postRoute);

app.listen(process.env.PORT || port, () => {
  console.log("Backend is running at port 8800");
});
