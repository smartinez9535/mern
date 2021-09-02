import React from 'react';

const DisplayUser = (props) => {

    const {allUsers} = props;

    return (
        <fieldset>
            <legend>DisplayUser.jsx</legend>
            {/* {JSON.stringify(allUsers)}{/* good for debugging the state */} 
            <div>
                {
                    props.allUsers.map( (user, idx) => {
                        return (
                        <li key={idx}>Username: {user.username} - Email: {user.email}</li>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default DisplayUser;