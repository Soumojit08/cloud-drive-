const express = require("express");
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.routes");

connectToDB();
const port = 3000;

//Middelwares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.use("/", indexRouter)
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
