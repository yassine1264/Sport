//import mongoose module
const mongoose = require("mongoose");
//create player schema
const playerschema = mongoose.Schema({
    name: String,
    age: Number,
    nbr: Number,
    position: String,
});
//affect name to playerschema
const player = mongoose.model("Player", playerschema);
//make model exportable
module.exports = player;