import React, {useState} from 'react';

const FormData = (props) =>{
    const [userName, setUserName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {userName, email, password}
        setUserName("")
        setEmail("")
        setPassword("");
        
        console.log(newUser);
    };

    return (
        <form onSubmit ={createUser}>
            <div>
                <label>Username: </label>
                <input type= "text" value={userName} onChange ={(e) => 
                {setUserName(e.target.value)}}></input>
            </div>
            <div>
                <label>Email: </label>
                <input type= "text" value={email} onChange ={(e) => 
                {setEmail(e.target.value)}}></input>
            </div>
            <div>
                <label>Password: </label>
                <input type= "text" value={password} onChange ={(e) => 
                {setPassword(e.target.value)}}></input>
            </div>
            <input type ="Submit" value="Create User"></input>

            <div>
                <p>User Name: {userName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>

            </div>
        </form>
    );

};



export default FormData;