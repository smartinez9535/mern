const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//require files
//routes
require("./routes/routes")(app);
//mongoose
require("./config/mongoose.config");

//start the server
app.listen(PORT, () => console.log(`>> server started on port ${PORT} <<`));