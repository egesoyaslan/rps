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

    if (playerSelection === `rock` && computerSelection === `scissors`) {
        alert(`You win! Rock beats Scissors`);
    } else if (playerSelection === `scissors` && computerSelection === `paper`) {
        alert(`You win! Scissors beats Paper`);
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
        alert(`You win! Paper beats Rock`);
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
        alert(`You loose! Paper beats Rock`);
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        alert(`You loose! Scissors beats Paper`);
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        alert(`You loose! Rock beats Scissors`);
    } else {
        alert(`Its a Tie! Play again`);
        playRound(playerSelection, computerSelection)}
}