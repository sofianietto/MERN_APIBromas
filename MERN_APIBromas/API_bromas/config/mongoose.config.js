
const mongoose = require("mongoose");
const db_name = "primera_base";

mongoose.connect(`mongodb://localhost:27017/${db_name}`)
    .then(() => console.log(`Established a connection to the database ${db_name}`))
    .catch(err => console.log(`Something went wrong when connecting to the database ${db_name}`, err));