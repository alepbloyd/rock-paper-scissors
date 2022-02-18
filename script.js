function computerPlay() {
    let randomNumber = (Math.random()*100)+1;

    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerWins = 0;
let computerWins = 0;
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt(`Rock, paper, scissors?`).toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return "Whoa baby that's a tie";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWins += 1;
            return `Player played rock, computer played paper - computer wins!`;
        } else if (computerSelection == "scissors") {
            playerWins += 1;
            return `Player played rock, computer played scissors - player wins!`;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins += 1;
            return `Player played paper, computer played rock - player wins!`;
        } else if (computerSelection == "scissors") {
            computerWins += 1;
            return `Played played paper, computer played scissors - computer wins!`;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerWins += 1;
            return `Player played scissors, computer played rock - computer wins!`;
        } else if (computerSelection == "paper") {
            playerWins += 1;
            return `Player played scissors, computer played paper - player wins!`;
        }
    } else {
        return `error? What did u do`;
    }
}

function game() {
    playerWins = 0;
    computerWins = 0;

    console.log(playRound(playerSelection, computerSelection));
    console.log(`After one round, player has ${playerWins} wins and computer has ${computerWins} wins`);

    console.log(playRound(playerSelection, computerSelection));
    console.log(`After two rounds, player has ${playerWins} wins and computer has ${computerWins} wins`);
    
    console.log(playRound(playerSelection, computerSelection));
    console.log(`After three rounds, player has ${playerWins} wins and computer has ${computerWins} wins`);

    console.log(playRound(playerSelection, computerSelection));
    console.log(`After four rounds, player has ${playerWins} wins and computer has ${computerWins} wins`);

    console.log(playRound(playerSelection, computerSelection));
    console.log(`After five rounds, player has ${playerWins} wins and computer has ${computerWins} wins`);
}

game();