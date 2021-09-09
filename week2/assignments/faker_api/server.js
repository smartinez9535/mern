const express = require("express");
const faker = require("faker");
//Save the instance of express() to a var/const
const app = express();
const port = 8000;

// middleware
// accept json data
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json(), express.urlencoded({ extended: true }));


// we can hard code some users like this
// later on we will want to store users in a database
class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = `${faker.address.streetAddress()} ${faker.address.streetName()} ${faker.address.streetSuffix()} - ${faker.address.cityName()}, ${faker.address.state()} ${faker.address.zipCode()} ${faker.address.country()}`
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User())
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company())
})
    
app.get("/api/user/company", (req, res) => {
    res.json({
        user: new User(),
        company: new Company()
    });
});

// ALWAYS AT THE END, FOR STARTING THE SERVER
// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
