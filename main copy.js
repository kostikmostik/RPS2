
const buttons = document.querySelectorAll('button');

// use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    gameRound(button.id);
  });
});

let playerSelection
let computerSelection
let playerScore
let computerScore

function gameRound(buttonID)
{    
        playerSelection = buttonID
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
}


function playRound(playerSelection, computerSelection){

    if((playerSelection === computerSelection))
        {
            console.log(`Player: ${playerSelection}, Computer: ${computerSelection}, DRAW!!`)
        }
    else if( (playerSelection == "rock" && (computerSelection == "paper" || computerSelection == "scissors")) ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "" && computerSelection == "rock") )
        {
            console.log(`Player: ${playerSelection}, Computer: ${computerSelection}, YOU WON!!`)
        }
    else    
        {
            console.log(`Player: ${playerSelection}, Computer: ${computerSelection}, YOU LOST!!`)
        }
}

function getComputerChoice()
{
    let choice = ["rock", "paper", "scissors"];
    let randNumber = Math.floor(Math.random() * 3)
    return choice[randNumber]
}