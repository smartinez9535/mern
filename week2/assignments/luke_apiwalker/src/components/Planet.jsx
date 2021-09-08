import React from 'react'
import { useParams } from 'react-router'

const Result = (props) => {

    return (
        <fieldset>
            <legend>Planet.jsx</legend>
                <h2 style={{textAlign: "left"}}>{props.planet.name}</h2>
                <h4 style={{textAlign: "left"}}>Climate: {props.planet.climate}</h4>
                <h4 style={{textAlign: "left"}}>Terrain: {props.planet.terrain}</h4>
                <h4 style={{textAlign: "left"}}>Surface Water: {props.planet.surface_water}</h4>
                <h4 style={{textAlign: "left"}}>Population: {props.planet.population}</h4>
        </fieldset>
    )
}

export default Result