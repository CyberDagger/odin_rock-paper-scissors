let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cPlay = Math.floor(Math.random() * 3);
    switch(cPlay) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let hPlay = prompt("Rock, Paper, or Scissors?");
    return hPlay;
}