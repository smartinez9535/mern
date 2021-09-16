import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Update = (props) => {

    let history = useHistory();
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [important, setImportant] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setImportant(res.data.important);
            })
            .catch(err => console.log(err))
    }, [id])

    const formUpdate = (e) => {
        e.preventDefault();
        //console.log("ok");
        axios.put("http://localhost:8000/api/notes/" + id, {
            title,
            content,
            important
        })
            .then( updatedNote => {
                console.log(updatedNote.data)
                history.push("/");
            })
            .catch( err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={formUpdate}>
                Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)}/> <br />
                Content: <input type="text" value={content} onChange={e => setContent(e.target.value)}/> <br />
                Important?: <input type="checkbox" checked={important} onChange={e => setImportant(e.target.checked)}/> <br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Update;