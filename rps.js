let playerSelection;
let string;
let playerWinCount = 0;
let computerWinCount = 0;

function getComputerChoice(result) {
    let num = Math.floor(Math.random() * 3) +1;
    switch(num) {
        case 1:
            result = `rock`;
            break;
        case 2:
            result = `paper`;
            break;
        case 3:
            result = `scissors`;
            break;
    }
    return result;
}

function playRound(computerSelection) {
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        string = `Its a tie! Throw again`;
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
        string = `You win! ${playerSelection} beats ${computerSelection}`;
        return playerWinCount += 1;
    } else if (score === 0) {
        string = `You loose! ${computerSelection} beats ${playerSelection}`;
        return computerWinCount += 1;
    }
}

const buttons = document.querySelector(`.select`);
const result = document.querySelector(`.result`);
const score = document.querySelector(`.score`);

buttons.addEventListener(`click`, (e) => {
    const target = e.target;

    switch(target.id) {
        case `rock`:
            playerSelection = `rock`;
            break;
        case `paper`:
            playerSelection = `paper`;
            break;
        case `scissors`:
            playerSelection = `scissors`;
            break;
    }

    playRound();

    result.textContent = string;
    score.textContent = `${playerWinCount} - ${computerWinCount}`;

    if (playerWinCount === 5) {
        result.textContent = `You win.`;
        playerWinCount = 0;
        computerWinCount = 0;
    } else if (computerWinCount === 5) {
        result.textContent = `You loose.`;
        playerWinCount = 0;
        computerWinCount = 0;
    }
});