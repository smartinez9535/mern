import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewOne = (props) => {

    const {id} = useParams();

    const [thisNote, setThisNote] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then( res => {
                console.log(res.data);
                setThisNote(res.data)
            })
            .catch(err=> console.log(err));
    }, [id])

    return (
        <div>
            <h3>{thisNote.title}</h3>
            <p>{thisNote.content}</p>
            <p>{thisNote.important ? "!!!" : ""}</p>
        </div>
    )
}

export default ViewOne;