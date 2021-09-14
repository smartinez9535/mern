import React, {useState, useEffect} from 'react';
import axios from 'axios';
import thisStyle from "./Main.module.css";
import { Link } from 'react-router-dom';

const Main = (props) => {

    cont [notes, setNotes] = useState([])

    useEffect( ()=> {
        getNotesFromDB()
    }, [])

    const getNotesFromDB = () => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data.allNotesArray);
                setNotes(res.data.allNotesArray);
            })
            .catch(err => console.log(err))
    }

    const deleteNote = (deleteId) => {
        console.log(deleteId);

        axios.delete("https://localhost:8000/api/notes/" + deleteId)
            .then(res => {
                console.log(res.data);
                //remove from DOM after success

                setNotes( notes.filter( note => note._id !== deleteId))
            })
            .catch(err => console.log(err))

    }

    return(
        <div>
            <h3>all notes:</h3>
            {
                notes.map( (note, i) => {
                    return (
                        <div key={note._id} className={thisStyle.this}>
                            <Link to={"/notes/" + note._id}>
                                <p>
                                    Title: {note.title} - { note.important ? "!!!" : ""} 
                                </p>
                                <p>
                                    Content: {note.content}
                                </p>
                            </Link>
                            <Link to={"/notes/update/" + note._id}>Update</Link>
                            <button onClick={() => deleteNote(note._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;