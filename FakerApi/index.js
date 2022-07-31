// refactor to make code simpler. 

const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");


app.get("/api/healthcheck", (req,res) => {
    console.log("checking if api is working")
    res.json({message:"It works!"})
});

const newUser = () => {
    const fakeUser ={
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber(),
        _id: faker.datatype.uuid(),
    };
    return fakeUser;
};

const createNewUser = newUser ();
console.log(createNewUser);

app.get("/api/users/new", (req,res) => {
    console.log(createNewUser)
    res.json(createNewUser)
});

const newCompany = () => {
    const fakeCompany = {
        _id: faker.datatype.uuid(),
        companyName: faker.company.companyName(),
        companyAddress: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return fakeCompany;
}

const createNewCompany = newCompany ();
console.log(createNewCompany);

app.get("/api/companies/new", (req,res) => {
    console.log(createNewCompany)
    res.json(createNewCompany)
});

// when combining the output from different api calls, take the const variables from the .get api and create a new object as the response. 

app.get("/api/user/company", (req,res) =>{
    const createNewUser = newUser();
    const createNewCompany = newCompany();
    const userAndCompany = {
        user: createNewUser,
        company: createNewCompany,
    };
    res.json(userAndCompany);
});

app.listen(port, () => console.log(`express server is live on port ${port}`));