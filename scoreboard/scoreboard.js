var addScoreGuest = 0
var addScoreHome = 0
var addRound = 1

// function addScoreGuest() {
//     addScoreGuest++;
//     document.getElementById("gscore").innerHTML="addScoreGuest"
// }

// function gScore() {
//     console.log('hi')
// }

// function addScoreGuest() {
//     console.log('add guest score')
// }

function gScore(){
    addScoreGuest++;
    document.getElementById("gscore").innerHTML= addScoreGuest
}

function hScore(){
    addScoreHome++;
    document.getElementById("hscore").innerHTML= addScoreHome
    
}
function hScoreMinus(){
    addScoreHome--;
    document.getElementById("hscore").innerHTML= addScoreHome
}
function gScoreMinus(){
    addScoreGuest--;
    document.getElementById("gscore").innerHTML= addScoreGuest
}
function round(){
    addRound++;
    document.getElementById("r").innerHTML= addRound
    
}
function gPenalty(){
    var guesttpenalty = document.getElementById("Penalty").value
    // var gPenalty = document.getElementById ("gPenalty");
    document.getElementById("gpenalty").innerHTML = guesttpenalty
}

function hPenalty(){
    var homeePenalty = document.getElementById("hPenalty").value
    document.getElementById("hpenalty").innerHTML = homeePenalty    
}

function addScore(){
    
}

function addScore(){
    
}

function addScore(){
    
}


function hiGracy() {
    document.write("Hi")
    document.write("Gracy")
    document.write("The Student")
}

// Functions are like a to do list

// They are useful because:
// 1. We can reuse code
// 2. Buttons can use functions