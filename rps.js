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

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    for (;playerSelection === computerSelection;) {
        console.log(`Its a tie! Throw again`);
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
    }

    if (playerSelection === `rock` && computerSelection === `scissors`) {
        return `You win! Rock beats Scissors`;
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        return `You win! Scissors beats Paper`;
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        return `You win! Paper beats Rock`;
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
        return `You loose! Paper beats Rock`;
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        return `You loose! Scissors beats Paper`;
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        return `You loose! Rock beats Scissors`;
    }
}

function game(n = 5) {
    for (; n > 0; n--){
        console.log(playRound());
    }
}