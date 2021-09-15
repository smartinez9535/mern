import React, { useEffect, useState } from 'react'
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom';
import axios from 'axios';
    
const Main = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAllAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[]);

    const removeFromDom = authorId => {
        setAllAuthors(allAuthors.filter(author => author._id !== authorId));
    }
    
    return (
        <div>
            <Link to="/new" style={{color: "purple"}}>Add an author</Link>
            <p style={{color: "purple", fontWeight: "bold"}}>We have quotes by:</p>
            {loaded && <AuthorList allAuthors={allAuthors} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;

