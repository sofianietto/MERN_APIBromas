const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minLength: [10, "Longitud de 10"],
        unique: true
    },
    punchine: {
        type: String,
        required: [true, "Punchine is required"],
        minLength: [3, "Longitud de 3"],
        unique: true
    }
}, { timestamps: true });

module.exports.JokeModel = mongoose.model('Joke', JokeSchema);