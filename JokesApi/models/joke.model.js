const mongoose = require ("mongoose");


const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
    },
    isFunny: {
        type: Boolean
    }
}, {timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;