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

function playRound(humanChoice, computerChoice) {
    let result;
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    result = "tie";
                    break;
                case "paper":
                    result = "loss";
                    break;
                case "scissors":
                    result = "win";
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    result = "win";
                    break;
                case "paper":
                    result = "tie";
                    break;
                case "scissors":
                    result = "loss";
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    result = "loss";
                    break;
                case "paper":
                    result = "win";
                    break;
                case "scissors":
                    result = "tie";
                    break;
            }
            break;
    }
    console.log(result);
}

const cSelect = getComputerChoice();
const hSelect = getHumanChoice();
playRound(hSelect, cSelect);