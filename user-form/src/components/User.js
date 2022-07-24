import React, {useState} from 'react';
//create firstName, lastName and confirm password 
const FormData = (props) =>{
    const [firstName, setFirstName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [confirmPassword, setConfirmPassword] = useState ("")

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPassword}
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("");
        
        console.log(newUser);
    };

    //create input requirements and validation error messages
    //name min >2
    //email min >5
    //password must match and >8
    return (
        <form onSubmit ={createUser}>
            <div>
                <label>First Name: </label>
                <input type= "text" value={firstName} onChange ={(e) => 
                {setFirstName(e.target.value)}}></input>
            </div>
                {firstName.length < 2 && firstName.length > 0 ? 
                (<p>First Name must be at least 2 characters</p>) : null}
            <div>
                <label>Last Name: </label>
                <input type= "text" value={lastName} onChange ={(e) => 
                {setLastName(e.target.value)}}></input>
            </div>
            {lastName.length < 2 && lastName.length > 0 ? 
                (<p>Last Name must be at least 2 characters</p>) : null}
            <div>
                <label>Email: </label>
                <input type= "text" value={email} onChange ={(e) => 
                {setEmail(e.target.value)}}></input>
            </div>
            {email.length < 5 && email.length > 0 ?
                (<p>Email must be at least 5 characters</p>) : null}
            <div>
                <label>Password: </label>
                <input type= "text" value={password} onChange ={(e) => 
                {setPassword(e.target.value)}}></input>
            </div>
            {password.length < 8 && password.length > 0 ?
                (<p>Password must be 8 characters long</p>) : null}
            <div>
                <label>Confirm Password: </label>
                <input type= "text" value={confirmPassword} onChange ={(e) => 
                {setConfirmPassword(e.target.value)}}></input>
            </div>
            {confirmPassword !== password ? <p>Passwords must match</p> : null }

            <input type ="Submit" value="Create User"></input>

        </form>
    );

};



export default FormData;