const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); 
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
require("dotenv").config(); 
const jwt =require("jsonwebtoken") 
const bcrypt =require("bcrypt") 
const User= require("./Models/users.js")


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL+"/iReport"; 

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const userRouter = require("./Routes/Users.js");
// app.use("/register", userRouter);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

const userRouter = require("./Routes/Users.js");
app.use("/user",userRouter);

const newsRouter = require("./Routes/News.js");
app.use("/news",newsRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});  