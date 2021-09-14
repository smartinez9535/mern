import axios from 'axios';
import {useState} from 'react';
import { useHistory } from 'react-router';

const Create = (props) => {

    let history = useHistory();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [important, setImportant] = useState(false);

    const createNote = (e) => {
        e.preventDefault();
        console.log("-> submitted: " + title, content, important);

        const newNote = {
            title: title,
            content,
            important
        }

        axios.post("http://localhost:8000/api/notes", newNote)
            .then( res => {
                console.log(res.data);
                /*  setTitle("")
                setContent("") Not necessary, only need if you stay on the page so fields are cleared
                setImportant(false) */
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Create new Note</h1>
            {/* title:{JSON.stringify(title)} <br />
            content:{JSON.stringify(content)} <br />
            important:{JSON.stringify(important)} <br /> */}
            <form onSubmit={createNote}>
                Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)}/> <br />
                Content: <input type="text" value={content} onChange={e => setContent(e.target.value)}/> <br />
                Important?: <input type="checkbox" checked={important} onChange={e => setImportant(e.target.checked)}/> <br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create;