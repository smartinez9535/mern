const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  //Create convention is /api/users
  app.post("/api/users/new", UserController.createNewUser);
  //Read All
  app.get("/api/users", UserController.findAllUsers);
  //Read One
  app.get("/api/users/:id", UserController.findOneSingleUser);
  //Update different http verb means completely different route, convention to do it this way
  app.put("/api/users/:id", UserController.updateExistingUser);
  //Delete
  app.delete("/api/users/:id", UserController.deleteAnExistingUser);
};