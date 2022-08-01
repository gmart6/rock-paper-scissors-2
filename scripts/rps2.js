function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}