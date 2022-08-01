function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function getPlayerChoice() {
    let choice;
    const options = ["rock", "paper", "scissors"];
    while (true) {
        choice = prompt("Choose rock, paper, or scissors").toLowerCase();
        if (!(options.includes(choice))) {
            alert("please enter a valid input");
            continue;
        } 
        break;
    }
    return choice;  
}
    
function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                result = "draw";
                break;
            case "paper":
                result = "loss";
                break;
            case "scissors":
                result = "win";
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                result = "win";
                break;
            case "paper":
                result = "draw";
                break;
            case "scissors":
                result = "loss";
                break;
        }
    } else {
        switch (computerSelection) {
            case "rock":
                result = "loss";
                break;
            case "paper":
                result = "win";
                break;
            case "scissors":
                result = "draw";
                break;
        }
    }
}
