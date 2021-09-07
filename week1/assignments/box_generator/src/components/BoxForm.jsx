import React, { useState } from  'react';
    
    
const BoxForm = (props) => {

    //const {addNewUser} = props;

    const [color, setColor] = useState("");
    
    const [Box, setBox] = useState({});

    const createBox = (e) => {
        e.preventDefault();
        //const newUser = { username, email, password };
        const newBox = {
            color
        }

        setBox(newBox);

        //CALLING THE FUNCTION FROM APP.JS AND PASSING THE NEW USER OBJECT WE CREATED
        props.addNewBox(newBox);
        //addNewUser(newUser);
        //console.log("Welcome", newUser);
    };

    return(
        <form onSubmit={ createBox }>
            {/* Color: {JSON.stringify(color)} <br/> */}
            <div>
                <label>Color: </label> 
                <input type="text" onChange={ (e) => setColor(e.target.value)} value={color} />
            </div>
            <input type="submit" value="Create" />
        </form>
    );
};
    
export default BoxForm;
