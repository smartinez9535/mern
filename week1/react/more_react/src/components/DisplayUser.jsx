import React from 'react';

const DisplayUser = (props) => {

    //const {allUsers} = props;

    const animals = ["zebra", "elephant", "bear"];

    return (
        <fieldset>
            <legend>DisplayUser.jsx</legend>
            {/* {JSON.stringify(props.allUsers)} */}

            {
                animals.map( (animal, index) => {
                    return <p key={index}>{animal}</p>
                })
            }
            <hr/>
            {/* {JSON.stringify(allUsers)}{/* good for debugging the state */} 
            {props.allUsers ?
            <div>
                {
                    props.allUsers.map( (user, idx) => {
                        return (
                        <li key={idx}>Username: {user.username} - Email: {user.email}</li>
                        )
                    })
                }
            </div>
            :

            "loading..."
            }
        </fieldset>
    )
}

export default DisplayUser;