import React from 'react'
import { useParams } from 'react-router'

const About = (props) => {

    return (
        <fieldset>
            <legend>Person.jsx</legend>
                <h2 style={{textAlign: "left"}}>{props.person.name}</h2>
                <h4 style={{textAlign: "left"}}>Height: {props.person.height} cm</h4>
                <h4 style={{textAlign: "left"}}>Mass: {props.person.mass} kg</h4>
                <h4 style={{textAlign: "left"}}>Hair Color: {props.person.hair_color}</h4>
                <h4 style={{textAlign: "left"}}>Skin Color: {props.person.skin_color}</h4>
        </fieldset>
    )
}

export default About