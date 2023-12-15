function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) +1;
    let result;
    switch(num) {
        case 1:
            result = `Rock`
            break;
        case 2:
            result = `Paper`
            break;
        case 3:
            result = `Scissors`
            break;
    }
    return result;
}

function playerSelection() {
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput.toLowerCase();
}

