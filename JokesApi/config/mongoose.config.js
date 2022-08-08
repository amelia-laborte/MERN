const mongoose = require ("mongoose");


// config for database
const dbName = "jokes_db";

mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`you are connected to the ${dbName} database!`)
    })
    .catch((err)=>{
        console.log(`there was an error connecting to the ${dbName} database!`)
        console.log(err);
    })
