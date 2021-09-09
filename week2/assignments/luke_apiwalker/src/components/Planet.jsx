import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

const Result = (props) => {
    const [planet, setPlanet] = useState({});
    const history = useHistory();

    //Query API for selected item
    useEffect(() => 
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
        .then(res => {setPlanet(res.data)})
        .catch(err => history.push("/error"))
    )

    //Display data retrieved from API
    return (
        <fieldset>
            <legend>Planet.jsx</legend>
                <h2 style={{textAlign: "left"}}>{planet.name}</h2>
                <h4 style={{textAlign: "left"}}>Climate: {planet.climate}</h4>
                <h4 style={{textAlign: "left"}}>Terrain: {planet.terrain}</h4>
                <h4 style={{textAlign: "left"}}>Surface Water: {planet.surface_water}</h4>
                <h4 style={{textAlign: "left"}}>Population: {planet.population}</h4>
        </fieldset>
    )
}

export default Result