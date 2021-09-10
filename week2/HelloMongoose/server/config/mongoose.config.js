const mongoose = require("mongoose");

const DB = "cool_friday_db";
mongoose.connect(`mongodb://localhost/${DB}`, {
//										CHANGE THIS TO THE NAME
//										||||||||||||||
//mongoose.connect("mongodb://localhost/name_of_your_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log(`Established a connection to the mongodb ${DB} database`))
	.catch(err => console.log("Something went wrong when connecting to the database", err));