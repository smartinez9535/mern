const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    content : {
        type: String,
        required: [true, "{PATH must be present}"],
        minlength: [5, "{PATH} must be at least 5 chars long"]
    },
    important : {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

//instantiate the schema and export
const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;