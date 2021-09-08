import React from 'react'
import { useParams } from 'react-router'

const About = (props) => {
    const {varName, colorName1, colorName2} = useParams();

    return (
        <fieldset>
            <legend>VarColors.jsx</legend>
                <h2 style={{color: `${colorName1}`, backgroundColor: `${colorName2}`}}>The <b>{isNaN(varName) ? 'word' : 'number'}</b> is: {varName}</h2>
        </fieldset>
    )
}

export default About