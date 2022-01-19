// 1- express
const express = require("express");
const connectDB = require("./config/connectDB");
const routes = require("./routes/contact");
const cors = require("cors");
//2- instanciation de l'express
const app = express();
app.use(cors());
// bodyparcer :
app.use(express.json());
//3- import dotenv + config
require("dotenv").config();

connectDB();

app.use("/api/contactlist", routes);
// 4- port
const port = process.env.PORT;
//5- running the server
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`this server is running ${port}`);
});
