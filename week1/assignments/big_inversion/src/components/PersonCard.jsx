import React, {useState} from 'react';

const PersonCard = (props) => {

    const [incAge , setIncAge] = useState(props.age);
    const firstName = useState(props.firstName);
    const lastName = useState(props.lastName);
    const hairColor = useState(props.hairColor);


    const addYear = () => {
        //console.log("Add one year");
        let newAge = incAge + 1
        setIncAge(newAge)
    }


    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {incAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => addYear()}>Birthday button for {firstName} {lastName}</button>
        </>
    )
}

export default PersonCard;