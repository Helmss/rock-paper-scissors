const options = ['rock' , 'paper' , 'scissors'];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){ return 'Player';
    } else {
        return 'Computer';
    }
}
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie'){
        return 'It\'s a tie!'
    }
    else if (result == 'Player'){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return 'You lose'
    }
}
function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt('Rock Paper Scissors');
        if(choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if(options.includes(choiceLower)){
            validatedInput = true;
            return choiceLower;
        }
    }
}
function game(){
    for (i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game()