let moves = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}

function game(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if (computerSelection === "Paper") {
                return "You lose (paper beats rock)!";
            }
            else if (computerSelection === "Scissors") {
                return "You win (rock beats scissors)!";
            }
            else {
                return "Tie (You both chose rock)!";
            }
            break;

        case "paper":
            if (computerSelection === "Scissors") {
                return "You lose (scissors beat paper)!";
            }
            else if (computerSelection === "Rock") {
                return "You win (paper beats rock)!";
            }
            else {
                return "Tie (You both chose paper)!";
            }
            break;

        case "scissors":
            if (computerSelection === "Rock") {
                return "You lose (rock beat scissors)!";
            }
            else if (computerSelection === "Paper") {
                return "You win (scissors beat paper)!";
            }
            else {
                return "Tie (You both chose scissors)!";
            }
            break;
    }
}