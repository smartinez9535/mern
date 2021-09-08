import React from 'react'
import { useParams } from 'react-router'

const Result = (props) => {
    const {varName} = useParams();

    return (
        <fieldset>
            <legend>SingleVar.jsx</legend>
                <h2>The <b>{isNaN(varName) ? 'word' : 'number'}</b> is: {varName}</h2>
        </fieldset>
    )
}

export default Result