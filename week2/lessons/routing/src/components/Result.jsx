import React from 'react'
import { useParams } from 'react-router'

const Result = (props) => {
    const {varName1, varName2} = useParams();
    return (
        <fieldset>
            <legend>Result.jsx</legend>
            <h1>name: {varName1}</h1>
            <h1>comment: {varName2}</h1>
        </fieldset>
    )
}

export default Result