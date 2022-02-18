let playerWins = 0;
let computerWins = 0;
let playerSelection;
let computerSelection;

const resultsDiv = document.querySelector(`#resultsDiv`);

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



function playRound(playerSelection, computerSelection) {
    // console.log(playerSelection);
    // console.log(computerSelection);
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // alert(button.id);
        playerSelection = button.textContent.toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        if (playerWins == 5) {
            // resultsDiv.appendChild(`Player Wins!`);
            resultsDiv.textContent= `Player Wins!`;
        } else if (computerWins == 5) {
            // resultsDiv.appendChild('Computer Wins!');
            resultsDiv.textContent= `Computer Wins!`;
        } else {
            const WinDisplay = document.createElement('div');
            WinDisplay.textContent = `Player wins: ${playerWins}, Computer wins: ${computerWins}`;
            resultsDiv.appendChild(WinDisplay);
        }
        // console.log(playRound(playerSelection,computerSelection));
    });
});




// const playerWinCount = document.createElement('div');
// playerWinCount.textContent = `${playerWins}`
// playerWinDisplay.appendChild(playerWinCount);
// const computerWinCount = document.createElement('div');
// computerWinCount.textContent = `${computerWins}`;
// computerWinDisplay.appendChild(computerWinCount);

// function game() {
//     playerWins = 0;
//     computerWins = 0;

//     for (let i = 0; i > 5; i++) {
//         console.log(playRound(playerSelection, computerSelection));
//         console.log(`After ${i+1} rounds, player has ${playerWins} wins and computer has ${computerWins} wins`);
//     }


// }

// game();