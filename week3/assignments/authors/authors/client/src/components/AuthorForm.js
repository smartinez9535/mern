import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const AuthorForm = (props) => {

    let history = useHistory();
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [dbErrors, setDBErrors] = useState([]);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res=> {
                console.log(res)
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response.data);
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            })
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <Link to="/">Home</Link>
            <p style={{color: "purple", fontWeight: "bold"}}>Add a new author:</p>
            {dbErrors.map((err, index) => <p style={{color: "red", fontWeight: "bold"}} key={index}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
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

export default AuthorForm;

