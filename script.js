let moves = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
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

        case "scissors":
            if (computerSelection === "Rock") {
                return "You lose (rock beats scissors)!";
            }
            else if (computerSelection === "Paper") {
                return "You win (scissors beat paper)!";
            }
            else {
                return "Tie (You both chose scissors)!";
            }

        default:
            return "Please enter rock, paper, or scissors.";
    }
}

let scoreUser = 0;
let scoreComp = 0;

function game(playSel) {
    let compSel = getComputerChoice();
    let result = playRound(playSel, compSel);
    if (result[4] === 'w') scoreUser++;
    if (result[4] === 'l') scoreComp++;

    // update results and score sections
    let results = document.querySelector("#results");
    results.textContent = result;
    let userScore = document.querySelector("#userScore");
    userScore.textContent = scoreUser;
    let compScore = document.querySelector("#compScore");
    compScore.textContent = scoreComp;

    if (scoreUser >= 5) {
        let winCond = document.createElement("h2");
        winCond.textContent = "You win!!!";
        document.querySelector("#currentScore").append(winCond);
        gameOver();
    }
    else if (scoreComp >= 5) {
        let winCond = document.createElement("h2");
        winCond.textContent = "You lose. Try again next time by refreshing the page!";
        document.querySelector("#currentScore").append(winCond);
        gameOver();
    }
}

function clickHandler(event) {
    const button = event.target;
    game(button.id);
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", clickHandler);
});

// remove event listener once the game ends (someone gets 5 points)
function gameOver() {
    buttons.forEach(button => {
        button.removeEventListener("click", clickHandler);
    });
}