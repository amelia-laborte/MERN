import React, { useState } from 'react';

const Person = (props) => {
    //destructure my variable names into props 
    const { firstName, lastName, hairColor, age, buttonText } = props;

    const [ newAge, setNewAge ] = useState(age);

    return (
        <div>
            <h2>Hello, my name is {firstName} {lastName} </h2>
            <p>Hair color: {hairColor}</p>
            <p>Age: {newAge}</p>
            <button onClick = {() => setNewAge( newAge + 1 )}>{buttonText}</button>
        </div>
    )
}

//keys of obj are firstName, lastName, hairColor, age.

export default Person;