function getComputerChoice(result) {
    let num = Math.floor(Math.random() * 3) +1;
    switch(num) {
        case 1:
            result = `rock`
            break;
        case 2:
            result = `paper`
            break;
        case 3:
            result = `scissors`
            break;
    }
    return result;
}

function getPlayerChoice(userInput) {
    userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}

let playerWinCount = 0;
let computerWinCount = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    for (;playerSelection === computerSelection;) {
        console.log(`Its a tie! Throw again`);
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
    }

    let score;
    if ((playerSelection === `rock` && computerSelection === `scissors`)
    || (playerSelection === `scissors` && computerSelection === `paper`)
    || (playerSelection === `paper` && computerSelection === `rock`)) {
        score = 1;
    } else if ((playerSelection === `rock` && computerSelection === `paper`)
    || (playerSelection === `paper` && computerSelection === `scissors`)
    || (playerSelection === `scissors` && computerSelection === `rock`)) {
        score = 0;
    }

    if (score === 1) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return playerWinCount += 1;
    } else {
        console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
        return computerWinCount += 1;
    }
}

function game(n = 5) {
    for (; n > 0; n--){
        playRound();
        console.log(`SCORE | Player: ${playerWinCount} | Computer: ${computerWinCount}`)
    }

    if (playerWinCount > computerWinCount) {
        console.log(`You won the game!`);
    } else {
        console.log(`You lost to a computer...`);
    }

    playerWinCount = 0;
    computerWinCount = 0;

    return `Good Game!`;
}