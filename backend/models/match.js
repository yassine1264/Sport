//import mongoose module
const mongoose = require("mongoose");
//create match schema
const matchschema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
});
//affect name to matchschema
const match = mongoose.model("Match", matchschema);
//make model exportable
module.exports = match;