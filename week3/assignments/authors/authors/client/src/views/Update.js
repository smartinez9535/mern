import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
    
const Update = (props) => {

    const history = useHistory();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [dbErrors, setDBErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(response => {
                setName(response.data.name);
            })
            .catch(err=>{
                console.log(err.response.data);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            })
    }, [id]);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(response => {
                console.log(response)
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response.data);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            })
            
    }
    
    return (
        <div>
            <Link to="/">Home</Link>
            <p style={{color: "purple", fontWeight: "bold"}}>Edit this author:</p>
            {dbErrors.map((err, index) => <p style={{color: "red", fontWeight: "bold"}} key={index}>{err}</p>)}
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>
                <button><Link to={"/"} style={{color: "black", textDecoration: "none"}}>Cancel</Link></button>
                <input type="submit"/>
            </form>
        </div>
    )
}
    
export default Update;

