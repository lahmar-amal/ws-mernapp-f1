//external module - third party module (express,mongoose,..)
const mongoose = require("mongoose");
// async , await
// try , catch
// connectDB : local module
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("the database is connected");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;

// const fs =require("fs") , http , ..: core module
