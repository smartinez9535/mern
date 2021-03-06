//1. import mongoose
const mongoose = require("mongoose");
const DB = "red_belt_db";

//2. connect mongoose to MongoDB
mongoose.connect("mongodb://localhost/" + DB)
    .then( () => console.log(`--> connected to ${DB} db`))
    .catch( (err) => console.log(`error connecting to ${DB}`, err))