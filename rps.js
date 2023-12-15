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

let score;
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    for (;playerSelection === computerSelection;) {
        console.log(`Its a tie! Throw again`);
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
    }

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
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You loose! ${computerSelection} beats ${playerSelection}`
    }
}

function game(n = 5) {
    for (; n > 0; n--){
        console.log(playRound());
    }
}