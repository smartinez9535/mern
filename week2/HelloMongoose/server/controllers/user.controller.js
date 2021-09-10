const User = require("../models/user.model");

//shell: db.collection_name.create({qeury})
//mongoose: model_name.create({qeury})

/* module.exports = {
  //Create
  createNewUser: (req, res) => {
    //console.log(req.body);
    User.create(req.body)
      //IMPORTANT what we return here is what we receive in React
      .then(newlyCreatedUser => res.json({ message: "success", user: newlyCreatedUser }))
      .catch(err => res.json({ message: "error", error: err }));
  },
  //Read all
  findAllUsers: (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json({ message: "error", error: err }));
  },
  //Read one
  findOneUser: (req, res) => {
    User.findById(req.params.id) // remember to set "id" as route parameter in routes
        .then(oneUser => res.json({ user: oneUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
  },
  //Update
  updateExistingUser: (req, res) => {
    //User.findOneAndUpdate({_id : req.params.id}, req.body, { new: true, runValidators: true })
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedUser => res.json({ user: updatedUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
  },
  //Delete
  deleteAnExistingUser: (req, res) => {
    //User.deleteOne({_id: req.params.id})
    User.findByIdAndDelete(req.params.id)
        .then(result => res.json({ deletedObj: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
  }
} */

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(oneSingleUser => res.json({ user: oneSingleUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
  )
      .then(updatedUser => res.json({ user: updatedUser }))
      .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
