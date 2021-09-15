import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Author ||</td>
                        <td>Actions available</td>
                    </tr>
                </thead>
                <tbody>
                    {props.allAuthors.map((author, idx) => {
                        return(
                            <tr key={idx}>
                                <td style={{color: "purple", fontWeight: "bold"}}>{author.name}</td>
                                <td><button><Link to={"/edit/" + author._id} style={{color: "black", textDecoration: "none"}}>Edit</Link></button> || <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
    
export default AuthorList;

