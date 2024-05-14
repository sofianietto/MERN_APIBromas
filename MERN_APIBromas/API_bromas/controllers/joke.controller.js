const Jokes = require("../models/joke.model")

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};

module.exports.findOneJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJokes => res.json({ jokes: oneJokes }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};

module.exports.createJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newJokes => res.json({ jokes: newJokes }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};

module.exports.updateJokes = (req, res) => {
    Jokes.updateOne({ _id: req.params.id }, req.body)
        .then(updateJokes => res.json({ jokes: updateJokes }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};

module.exports.deleteJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
};

module.exports.randomJokes = (req, res) => {

    Jokes.count().exec(( count) => {
        let random = Math.floor(Math.random() * count);
        Jokes.find().limit(-1).skip(random)
        .then(result => res.json({ result: result }))
        .catch(error => res.json({ message: "Algo salió mal", error: error }))
        })
};