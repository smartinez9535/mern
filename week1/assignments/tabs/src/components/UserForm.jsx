import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");

    const[firstNameError, setFirstNameErr] = useState("");
    const[lastNameError, setLastNameErr] = useState("");
    const[emailError, setEmailErr] = useState("");
    const[passwordError, setPasswordErr] = useState("");
    const[confirmPasswordError, setConfirmPasswordErr] = useState("");
    
    const checkFirstNameLength = (aString) => {
        setFirstName(aString);
        if (aString.length < 2) {
            setFirstNameErr("Must be at least 2 characters")
        }
        else{
            setFirstNameErr("");
        }
    }

    const checkLastNameLength = (aString) => {
        setLastName(aString);
        if (aString.length < 2) {
            setLastNameErr("Must be at least 2 characters")
        }
        else{
            setLastNameErr("");
        }
    }

    const checkEmailLength = (aString) => {
        setEmail(aString);
        if (aString.length < 5) {
            setEmailErr("Must be at least 5 characters")
        }
        else{
            setEmailErr("");
        }
    }

    const checkPasswordLength = (aString) => {
        setPassword(aString);
        if (aString.length < 8) {
            setPasswordErr("Must be at least 8 characters")
        }
        else{
            setPasswordErr("");
        }
    }
    
    const checkConfirmPasswordLength = (aString) => {
        setConfirmPassword(aString);
        if (aString.length < 8) {
            setConfirmPasswordErr("Must be at least 8 characters")
        }
        else{
            setConfirmPasswordErr("");
        }
    }
    
    return(
        <form>
            <div>
                <fieldset>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => checkFirstNameLength(e.target.value)} value={firstName} /><br/>
                    { firstNameError ? <span style={{color: "red"}}>Must be at least 2 characters</span> : <span>&nbsp;</span>}
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => checkLastNameLength(e.target.value)} value={lastName} /><br/>
                    { lastNameError ? <span style={{color: "red"}}>Must be at least 2 characters</span> : <span>&nbsp;</span>}
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => checkEmailLength(e.target.value)} value={email} /><br/>
                    { emailError ? <span style={{color: "red"}}>Must be at least 5 characters</span> : <span>&nbsp;</span>}
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => checkPasswordLength(e.target.value)} value={password} /><br/>
                    { passwordError ? <span style={{color: "red"}}>Must be at least 8 characters</span> : <span>&nbsp;</span>}
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => checkConfirmPasswordLength(e.target.value)} value={confirmPassword} /><br/>
                    { confirmPasswordError ? <span style={{color: "red"}}>Must be at least 8 characters</span> : <span>&nbsp;</span>}
                </fieldset>
            </div>
            <h3>Your Form Data</h3>
            First Name: {JSON.stringify(firstName)} <br/>
            Last Name: {JSON.stringify(lastName)} <br/>
            Email: {JSON.stringify(email)} <br/>
            Password: {JSON.stringify(password)} <br/>
            Confirm Password: {JSON.stringify(confirmPassword)} <br/>
        </form>
    );
};
    
export default UserForm;
