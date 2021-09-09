const express = require("express");
//Save the instance of express() to a var/const
const app = express();
const port = 8000;

// middleware
// accept json data
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json(), express.urlencoded({ extended: true }));


// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/users", (req, res) => {
    res.json(users)
})

app.get("/api/user/:id", (req, res) => {
    const {id} = req.params;
    res.json({
        your_id: id,
        status: "ok",
        user: users[id]
    })
})
    
app.get("/api/users", (req, res) => {
    res.json( users );
});


//ROUTES TO THE API
app.get("/api/json", (req, res) => {
    res.json({status: "ok"})
})

app.get("/", (request, response) => {
    //console.log("hello");
    response.send("hello from server.js");
})

const myCallBackFunction = (req, res) => {
    res.json({message: "hello callback"})
}

app.get("/api/something", myCallBackFunction)




// ALWAYS AT THE END, FOR STARTING THE SERVER
// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
