import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

const About = (props) => {
// add in use effect functionality
    const [person, setPerson] = useState({});
    const history = useHistory();

    //Query API for selected item
    useEffect(() => 
        axios.get(`https://swapi.dev/api/people/${props.id}`)
        .then(res => {setPerson(res.data)})
        .catch(err => history.push("/error"))
    )
    
    //Display data retrieved from API
    return (
        <fieldset>
            <legend>Person.jsx</legend>
                <h2 style={{textAlign: "left"}}>{person.name}</h2>
                <h4 style={{textAlign: "left"}}>Height: {person.height} cm</h4>
                <h4 style={{textAlign: "left"}}>Mass: {person.mass} kg</h4>
                <h4 style={{textAlign: "left"}}>Hair Color: {person.hair_color}</h4>
                <h4 style={{textAlign: "left"}}>Skin Color: {person.skin_color}</h4>
        </fieldset>
    )
}

export default About