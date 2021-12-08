let ques = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissors'];
var randomMoveOfComputer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
 
var playerName= ques.question("What is your name: ")

console.log("Hii "+ playerName )
console.log("choose any move in rock,paper,scissors")
var playerMove = ques.question("Which move you want to do?:-");
 
if (playerMove == randomMoveOfComputer){
   console.log("Match Draw");
}
else if(playerMove =="rock" && randomMoveOfComputer == "paper"){
   console.log("computer won the match");
}
else if(playerMove=="rock" && randomMoveOfComputer == "scissors"){
    console.log( playerName,"win");
}
else if(playerMove=="paper" && randomMoveOfComputer == "scissors"){
    console.log("computer won the match");
}
else if(playerMove=="paper" && randomMoveOfComputer == "rock"){
    console.log(playerName, "won the match");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "paper"){
    console.log(playerName," won the match");
}
else if(playerMove=="scissors" && randomMoveOfComputer == "rock"){
    console.log("computer won the match");
}
// var computerMoves = ['rock', 'paper', 'scissors'];
// var randomMoveOfComputer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
// console.log(randomMoveOfComputer)