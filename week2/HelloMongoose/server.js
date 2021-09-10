const express = require("express");
const app = express();
//const PORT = 8000;

// This will fire our mongoose.connect statement to initialize our database connection - imports mongoose
require("./server/config/mongoose.config");

//middleware, two separate functions
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

        //can be PORT instead
    //      |
app.listen(8000, () => console.log("The server is all fired up on port 8000")); //could use `${PORT}` if using that
