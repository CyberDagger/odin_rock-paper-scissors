/* DOM Elements */
const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");
const textTitle = document.querySelector("#title");
const textResults = document.querySelector("#results");
const playComputer = document.querySelector("#computerPlay");
const playHuman = document.querySelector("#humanPlay");
const textScoreHuman = document.querySelector("#scoreHuman");
const textScoreComputer = document.querySelector("#scoreComputer");

/* Game State Variables */
let gamePlaying = true;
let humanScore = 0;
let computerScore = 0;

/* Button Behavior */
buttonRock.addEventListener("click", () => {
    if (gamePlaying) {
        prepareRound("rock", getComputerChoice());
    } 
});
buttonPaper.addEventListener("click", () => {
    if (gamePlaying) {
        prepareRound("paper", getComputerChoice());
    }
});
buttonScissors.addEventListener("click", () => {
    if (gamePlaying) {
        prepareRound("scissors", getComputerChoice());
    }
});

/* Game Logic */
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

function updateScore() {
    textScoreHuman.textContent = humanScore;
    textScoreComputer.textContent = computerScore;
}

function prepareRound(humanChoice) {
    let result;
    result = playRound(humanChoice, getComputerChoice());
    if (result === "win") {
        humanScore++;
    } else if (result === "loss") {
        computerScore++;
    }
    updateScore();
    if (humanScore >= 5) {
        textTitle.textContent = "Game over! You win! Refresh the page to play again"
        gamePlaying = false;
    } else if (computerScore >= 5) {
        textTitle.textContent = "Game over! You win! Refresh the page to play again"
        gamePlaying = false;
    }
}

function playRound(humanChoice, computerChoice) {
    let result;
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    playComputer.textContent = "Rock";
                    textResults.textContent = "A tie! Both chose Rock.";
                    result = "tie";
                    break;
                case "paper":
                    playComputer.textContent = "Paper";
                    textResults.textContent = "You lose! Paper beats Rock.";
                    result = "loss";
                    break;
                case "scissors":
                    playComputer.textContent = "Scissors";
                    textResults.textContent = "You win! Rock beats Scissors.";
                    result = "win";
                    break;
            }
            playHuman.textContent = "Rock";
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    playComputer.textContent = "Rock";
                    textResults.textContent = "You win! Paper beats Rock.";
                    result = "win";
                    break;
                case "paper":
                    playComputer.textContent = "Paper";
                    textResults.textContent = "A tie! Both chose Paper.";
                    result = "tie";
                    break;
                case "scissors":
                    playComputer.textContent = "Scissors";
                    textResults.textContent = "You lose! Scissors beats Paper.";
                    result = "loss";
                    break;
            }
            playHuman.textContent = "Paper";
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    playComputer.textContent = "Rock";
                    textResults.textContent = "You lose! Rock beats Scissors.";
                    result = "loss";
                    break;
                case "paper":
                    playComputer.textContent = "Paper";
                    textResults.textContent = "You win! Scissors beats Paper.";
                    result = "win";
                    break;
                case "scissors":
                    playComputer.textContent = "Scissors";
                    textResults.textContent = "A tie! Both chose Scissors.";
                    result = "tie";
                    break;
            }
            playHuman.textContent = "Scissors";
            break;
    }
    return result;
}