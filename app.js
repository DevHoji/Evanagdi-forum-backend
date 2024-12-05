require("dotenv").config()
const express = require("express");
const app = express();
const port = 5500;

//db connection
const dbConnection = require("./db/dbConfig"); // Import promise-based pool

//user routes middleware file
const userRoute = require("./routes/userRoute");

//question route middleware file
const questionRoute = require("./routes/questionRoute")

//authentication middleware
const authMiddleware = require('./middleware/authMiddleware')


//json middleware to extract json data
app.use(express.json());

//user routes middleware
app.use("/api/users", userRoute);

//question routes middleware ??
app.use("/api/questions", authMiddleware, questionRoute);

//answer routes middleware ??



async function start() {
  try {
    const result= await dbConnection.execute("SELECT 'test' ");
    app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();
