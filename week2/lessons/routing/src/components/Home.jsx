import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    let person = {
        id: 11,
        name: "john"
    }
    return (
        <fieldset>
            <legend>Home.jsx</legend>
            <h1>Home</h1>
            <Link to="/form">Go to the form</Link>
            <Link to={`/result/${person.id}/${person.name}`}>Go to 1/2</Link>
        </fieldset>
    )
}

export default Home