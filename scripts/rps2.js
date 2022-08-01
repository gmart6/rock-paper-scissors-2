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

    switch (result) {
        case "loss":
            return ["loss", `You lose this round! ${computerSelection} beats ${playerSelection}.`];
        case "win":
            return ["win", `You win this round! ${playerSelection} beats ${computerSelection}.`];
        case "draw":
            return ["draw", `This round's a draw. ${playerSelection} and ${computerSelection}.`]
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    let draws = 0;
    console.log("let's play a 5 round game of rock, paper, scissors.");

    for (let i = 0; i < 5; i++) {
        let round = playRound(getPlayerChoice(), getComputerChoice());
        switch(round[0]) {
            case "win":
                wins++;
                break;
            case "draw":
                draws++;
                break;
            case "loss":
                losses++;
                break;
        }
        console.log(round[1]);
    }
    let scoreSummary = ` ${ wins } win(s), ${ draws } draw(s), and ${ losses } loss(es).`;
    if (wins > losses) {
        console.log("You won the game!" + scoreSummary);
    } else if (losses > wins) {
        console.log("You lost the game!" + scoreSummary);
    } else {
        console.log("You drew the game!" + scoreSummary);
    }
}
