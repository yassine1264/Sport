//import mongoose module
const mongoose = require("mongoose");
//create team schema
const teamschema = mongoose.Schema({
    name: String,
    owner: String,
    foundation: Number,
});
//affect name to teamschema
const team = mongoose.model("Team", teamschema);
//make model exportable
module.exports = team;