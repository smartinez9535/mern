const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
require('./routes/author.routes')(app);
//mongoose
require('./config/mongoose.config.js'); 

//start the server
app.listen(8000, () => console.log("Listening at Port 8000"));

