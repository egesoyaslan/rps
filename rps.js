let playerSelection;
let playerWinCount = 0;
let computerWinCount = 0;

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

function playRound(computerSelection) {
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log(`Its a tie! Throw again`);
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
    } else if (score === 0) {
        console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
        return computerWinCount += 1;
    }
}

const buttons = document.querySelector(`.select`);

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
});

