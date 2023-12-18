let moves = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());