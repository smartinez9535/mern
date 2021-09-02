import React, { useState } from  'react';
    
    
const UserForm = (props) => {

    //const {addNewUser}

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");  
    //const [age, setAge] = useState(null);

    const [user, setUser] = useState({});

    const[nameError, setNameErr] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        //const newUser = { username, email, password };
        const newUser = {
            username,
            email
            //password
        }

        setUser(newUser);

        //CALLING THE FUNCTION FROM APP.JS AND PASSING THE NEW USER OBJECT WE CREATED
        props.addNewUser(newUser);
        //console.log("Welcome", newUser);
    };

    const checkLength = (aString) => {
        console.log(aString);

        setUsername(aString);
        if (aString.length < 3) {
            setNameErr("Must be longer than 3 chars")
        }
        else{
            setNameErr("");
        }
    }
    
    return(
        <form onSubmit={ createUser }>
            username: {JSON.stringify(username)} <br/>
            email: {JSON.stringify(email)} <br/>
            password: {JSON.stringify(password)} <br/>
            user: {JSON.stringify(user)} <br/>
            <div>
                <label>Username: </label> 
                {/* <input type="text" onChange={ (e) => setUsername(e.target.value)} value={username} /> */}
                <input type="text" onChange={ (e) => checkLength(e.target.value)} value={username} /><br/>
                { nameError ? <span style={{color: "red"}}>Make string longer</span> : <span>&nbsp;</span>}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value)} value={password} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
