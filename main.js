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
                    result = "A tie! Both chose Rock.";
                    break;
                case "paper":
                    result = "You lose! Paper beats Rock.";
                    break;
                case "scissors":
                    result = "You win! Rock beats Scissors.";
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    result = "You win! Paper beats Rock.";
                    break;
                case "paper":
                    result = "A tie! Both chose Paper.";
                    break;
                case "scissors":
                    result = "You lose! Scissors beats Paper.";
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    result = "You lose! Rock beats Scissors.";
                    break;
                case "paper":
                    result = "You win! Scissors beats Paper.";
                    break;
                case "scissors":
                    result = "A tie! Both chose Scissors.";
                    break;
            }
            break;
    }
    console.log(result);
}

const cSelect = getComputerChoice();
const hSelect = getHumanChoice();
playRound(hSelect, cSelect);