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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let result;
        humanChoice = humanChoice.toLowerCase();
        switch(humanChoice) {
            case "rock":
                switch(computerChoice) {
                    case "rock":
                        console.log("A tie! Both chose Rock.");
                        result = "tie";
                        break;
                    case "paper":
                        console.log("You lose! Paper beats Rock.");
                        result = "loss";
                        break;
                    case "scissors":
                        console.log("You win! Rock beats Scissors.");
                        result = "win";
                        break;
                }
                break;
            case "paper":
                switch(computerChoice) {
                    case "rock":
                        console.log("You win! Paper beats Rock.");
                        result = "win";
                        break;
                    case "paper":
                        console.log("A tie! Both chose Paper.");
                        result = "tie";
                        break;
                    case "scissors":
                        console.log("You lose! Scissors beats Paper.");
                        result = "loss";
                        break;
                }
                break;
            case "scissors":
                switch(computerChoice) {
                    case "rock":
                        console.log("You lose! Rock beats Scissors.");
                        result = "loss";
                        break;
                    case "paper":
                        console.log("You win! Scissors beats Paper.");
                        result = "win";
                        break;
                    case "scissors":
                        console.log("A tie! Both chose Scissors.");
                        result = "tie";
                        break;
                }
                break;
        }
        return result;
    }
    for (let i = 0; i < 5; i++) {
        let result;
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        result = playRound(humanChoice, computerChoice);
        switch(result) {
            case "win":
                humanScore++;
                break;
            case "loss": 
                computerScore++;
                break;
        }
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

playGame();