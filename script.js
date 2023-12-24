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
    console.log(result);
    console.log("The score is now\nUser: " + scoreUser + "\nComputer: " + scoreComp);
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // only runs when the specific button is clicked
        // button.id is assigned "rock" "paper" or "scissors" based on which button it is
        game(button.id)
    })
});