const Note = require("../models/Note")

module.exports = {
    // READ ALL -------------------------------------
    findAll: (req, res) => {
        Note.find()
            .then(allNotes => {
                console.log("allNotes ->", allNotes);
                res.json({allNotesArray: allNotes})//one or the other either just allNotes or {allNotesArray: allNotes}
            })
            .catch(err => {
                console.log(err)
                res.json({message: "error", error:err})
            })
    },
    //READ ONE ----------------------------------------
    findOne: (req, res) => {
        //Note.findOne({_id: req.params.id})
        Note.findById(req.params.id)
            .then(note => res.json(note))
            .catch(err => res.json(err))
    },
    //CREATE-----------------------------------------------
    create: (req, res) => {
        //const {title, content} = req.body;
        //Note.create({title, content})
        Note.create(req.body)
            .then(newNote => res.json(newNote))
            .catch(err => res.json(err))
    },
    //UPDATE------------------------------------------------
    update: (req, res) => {
        //Note.findOneAndUpdate({_id: req.params.id})
        Note.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedNote => res.json(updatedNote))
            .catch(err => res.json(err))
    },
    //DELETE------------------------------------------------
    delete: (req, res) => {
        //Note.deleteOne({_id: req.params.id})
        Note.findByIdAndDelete(req.params.id)
            .then(result => res.json({result: result}))
            .catch(err => res.json(err))
    }
}