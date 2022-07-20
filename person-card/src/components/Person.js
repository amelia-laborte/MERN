import React from 'react';

const Person = (props) => {
    //destructure my variable names into props 
    const { firstName, lastName, hairColor, age } = props;

    return (
        <div>
            <h2>Hello, my name is {firstName} {lastName} </h2>
            <p>Hair color: {hairColor}</p>
            <p>Age: {age}</p>
        </div>
    )
}

//keys of obj are firstName, lastName, hairColor, age.

export default Person;