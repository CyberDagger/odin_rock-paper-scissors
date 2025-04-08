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
        textTitle.textContent = "Game over! You win! Refresh the page to play again";
        buttonRock.style.backgroundColor = "palegoldenrod";
        buttonPaper.style.backgroundColor = "palegoldenrod";
        buttonScissors.style.backgroundColor = "palegoldenrod";
        gamePlaying = false;
    } else if (computerScore >= 5) {
        textTitle.textContent = "Game over! You lose! Refresh the page to play again";
        buttonRock.style.backgroundColor = "palegoldenrod";
        buttonPaper.style.backgroundColor = "palegoldenrod";
        buttonScissors.style.backgroundColor = "palegoldenrod";
        gamePlaying = false;
    }
}

function playRound(humanChoice, computerChoice) {
    let result;
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    playComputer.innerHTML = "<img src=\"./images/icon_rock.png\">";
                    textResults.textContent = "A tie! Both chose Rock.";
                    result = "tie";
                    break;
                case "paper":
                    playComputer.innerHTML = "<img src=\"./images/icon_paper.png\">";
                    textResults.textContent = "You lose! Paper beats Rock.";
                    result = "loss";
                    break;
                case "scissors":
                    playComputer.innerHTML = "<img src=\"./images/icon_scissors.png\">";
                    textResults.textContent = "You win! Rock beats Scissors.";
                    result = "win";
                    break;
            }
            playHuman.innerHTML = "<img src=\"./images/icon_rock.png\">";
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    playComputer.innerHTML = "<img src=\"./images/icon_rock.png\">";
                    textResults.textContent = "You win! Paper beats Rock.";
                    result = "win";
                    break;
                case "paper":
                    playComputer.innerHTML = "<img src=\"./images/icon_paper.png\">";
                    textResults.textContent = "A tie! Both chose Paper.";
                    result = "tie";
                    break;
                case "scissors":
                    playComputer.innerHTML = "<img src=\"./images/icon_scissors.png\">";
                    textResults.textContent = "You lose! Scissors beats Paper.";
                    result = "loss";
                    break;
            }
            playHuman.innerHTML = "<img src=\"./images/icon_paper.png\">";
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    playComputer.innerHTML = "<img src=\"./images/icon_rock.png\">";
                    textResults.textContent = "You lose! Rock beats Scissors.";
                    result = "loss";
                    break;
                case "paper":
                    playComputer.innerHTML = "<img src=\"./images/icon_paper.png\">";
                    textResults.textContent = "You win! Scissors beats Paper.";
                    result = "win";
                    break;
                case "scissors":
                    playComputer.innerHTML = "<img src=\"./images/icon_scissors.png\">";
                    textResults.textContent = "A tie! Both chose Scissors.";
                    result = "tie";
                    break;
            }
            playHuman.innerHTML = "<img src=\"./images/icon_scissors.png\">";
            break;
    }
    return result;
}