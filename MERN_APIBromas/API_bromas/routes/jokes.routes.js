const JokesController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/random", JokesController.randomJokes);
    app.get("/api/jokes/:id", JokesController.findOneJokes);
    app.post("/api/jokes/new", JokesController.createJokes);
    app.put("/api/jokes/update/:id", JokesController.updateJokes);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJokes);
}