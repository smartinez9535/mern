import React, { useState } from  'react';
    
    
const ItemForm = (props) => {

    //const {addNewUser} = props;

    const[description, setDescription] = useState({});

    const[complete, setComplete] = useState({});
    
    const [item, setItem] = useState({});

    const createItem = (e) => {
        e.preventDefault();
        //const newUser = { username, email, password };
        const newItem = {
            description,
            complete
        }

        setItem(newItem);

        //CALLING THE FUNCTION FROM APP.JS AND PASSING THE NEW ITEM OBJECT WE CREATED
        props.addNewItem(newItem);
    };

    return(
        <form onSubmit={ createItem }>
            <div>
                <input type="text" onChange={ (e) => setDescription(e.target.value)} />
            </div>
            <input type="submit" value="Create" onClick={ (e) => setComplete(false)}/>
        </form>
    );
};
    
export default ItemForm;
