/***************Modules Importation ************** */

// import express module
const express = require("express");
//import body parser module
const bodyParser = require("body-parser");

//import mongoose module
const mongoose = require("mongoose");
//sportDB=> DataBase name
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');


/***************Express Application ************** */

//create express application
const app = express();

/***************Model Importation ************** */
const Match=require("./models/match");






/***************App Configuration  ************** */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/*************** Security configuration  ************** */
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});
let matchesTab = [
    { id: 1, scoreOne: 3, scoreTwo: 0, teamOne: "CA", teamTwo: "EST" },
    { id: 2, scoreOne: 4, scoreTwo: 0, teamOne: "FCB", teamTwo: "RMD" },
    { id: 3, scoreOne: 3, scoreTwo: 3, teamOne: "DOR", teamTwo: "BAY" },
    { id: 4, scoreOne: 2, scoreTwo: 1, teamOne: "JUV", teamTwo: "LEP" },
];

let playersTab = [
    { id: 1, name: 'ronaldo', age: 30, nbr: "7", position: "att" },
    { id: 2, name: 'messi', age: 30, nbr: "10", position: "att" },
    { id: 3, name: 'puyol', age: 50, nbr: "20", position: "def" },
    { id: 4, name: 'balotelli', age: 40, nbr: "8", position: "mil" },

];

let teamsTab = [
    { id: 1, name: 'CA', owner: 'Med', foundation: 1920 },
    { id: 2, name: 'EST', owner: 'Farouk', foundation: 1919 },
    { id: 3, name: 'ESS', owner: 'Azer', foundation: 1925 },
    { id: 4, name: 'CSS', owner: 'Khawla', foundation: 1926 },

];
function generateID(T) {
    let max;
    if (T.length == 0) {
        max == 0;
    } else {
        max = T[0].id;
        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;

            }
        }
    }
    return max + 1;

}



/***************Business Logics ************** */
//business Logic: Add Match
app.post("/api/matches", (req, res) => {
    //instructions
    //affiche valeur mel front l back
    console.log("Here into BL:Add Match", req.body);
    req.body.id = generateID(matchesTab);
    matchesTab.push(req.body);
    res.json({ isAdded: true });

});
//business Logic: Edit Match
app.put("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL:Edit Match", req.body);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.body.id) {
            matchesTab[i] = req.body;
            break;

        }

    }
    res.json({ isEdited: "Success" })

});

//business Logic: Get All Match
app.get("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL:Get All Match");
    res.json({ matches: matchesTab });

});
//business Logic: Delete Match By Id
app.delete("/api/matches/:id", (req, res) => {
    //instructions
    console.log("Here into BL:Delete Match By ID", req.params.id);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.params.id) {
            matchesTab.splice(i, 1);
            break;


        }
    }
    res.json({ isDeleted: true });


});
//business Logic: search Matches By Scores
app.post("/api/matches/search", (req, res) => {
    //instructions
    console.log("Here into BL search Matches By Scores", req.body);
    let matches = [];
    for (let i = 0; i < matchesTab.length; i++) {
        if (
            matchesTab[i].scoreOne == req.body.scoreOne ||
            matchesTab[i].scoreTwo == req.body.scoreTwo

        ) {
            matches.push(matchesTab[i]);
        }

    }
    res.json({ T: matches });


});



//business Logic: Get Match By Id
app.get("/api/matches/:id", (req, res) => {
    //instructions
    console.log("Here into BL:Get Match By ID", req.params.id);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.params.id) {
            res.json({ match: matchesTab[i] });
            break;

        }
    }

});

//business Logic: Add Team
app.post("/api/teams", (req, res) => {
    //instructions
    console.log("here into BL:Add Team", req.body);
    req.body.id = generateID(teamsTab);
    teamsTab.push(req.body);

    res.json({ isAdded: true });
});

//business Logic: Edit Team
app.put("/api/teams", (req, res) => {
    //instructions
    console.log("here into BL:Edit Team", req.body);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.body.id) {
            teamsTab[i] = req.body;
            break;

        }

    }
    res.json({ isEdited: "Success" });


});

//business Logic: Get All Team
app.get("/api/teams", (req, res) => {
    //instructions
    console.log("here into BL:Get All Team");
    res.json({ teams: teamsTab });


});
//business Logic: Delete Team By ID
app.delete("/api/teams/:id", (req, res) => {
    //instructions
    console.log("here into BL: Delete Team By ID", req.params.id);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.params.id) {
            teamsTab.splice(i, 1);
            break;


        }
    }
    res.json({ isDeleted: true });


});

//business Logic: Get Team By ID
app.get("/api/teams/:id", (req, res) => {
    //instructions
    console.log("here into BL: Get Team By ID", req.params.id);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.params.id) {
            res.json({ team: teamsTab[i] });
            break;

        }

    }

});

//business Logic: Add Player
app.post("/api/players", (req, res) => {
    //instructions
    console.log("here into BL:Add Player", req.body);
    req.body.id = generateID(playersTab);
    playersTab.push(req.body);
    res.json({ isAdded: true });
});

//business Logic: Edit Player
app.put("/api/players", (req, res) => {
    //instructions
    console.log("here into BL:Edit Player", req.body);
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.body.id) {
            playersTab[i] = req.body;
            break;

        }

    }
    res.json({ isEdited: "Success" });


});

//business Logic: Get All Player
app.get("/api/players", (req, res) => {
    //instructions
    console.log("here into BL:Get All player");
    res.json({ player: playersTab });

});

//business Logic: Delete Player By ID
app.delete("/api/players/:id", (req, res) => {
    //instructions
    console.log("here into BL: Delete Player By ID", req.params.id);
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.params.id) {
            playersTab.splice(i, 1);
            break;


        }
    }
    res.json({ isDeleted: true });


});

//business Logic: Get Player By ID
app.get("/api/players/:id", (req, res) => {
    //instructions
    console.log("here into BL: Get Player By ID", req.params.id);
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.params.id) {
            res.json({ player: playersTab[i] });
            break;
        };

    }
});








/***************App Exportation ************** */

//make app importable
module.exports = app;
