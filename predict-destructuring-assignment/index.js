

//For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //this will console log the car sitting in index 0 because you are assigning the const variable randomCar index zero of the array cars
console.log(otherRandomCar) //this will console log Mercedes and Honda because the "," skips index 0 then assigns index 1 and 2 of the const cars to otherRandomCar

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
//name did not get assigned a value because otherName is undefined. 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //undefined because hashedPassword didn't get assigned a value but has access to const password because it is in the scope of the function

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//2
const [,,,second] = numbers;//5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second);//false
console.log(first == third);//true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5





