let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0


const buttons = document.querySelectorAll('button');

// use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {

    if(button.id === 'rock' || button.id === 'paper' || button.id === 'scissors'){
        gameRound(button.id);  
    }
    
    if(button.id === 'reset'){
        playerScore = 0;
        computerScore = 0;
        counterDisp.textContent = `Player: ${playerScore} Computer: ${computerScore}`
        counterCont.appendChild(counterDisp)
    }
  });
});


const resultsCont = document.querySelector('#result')
const resultsDisp = document.createElement('p')

const counterCont= document.querySelector('#counter')
const counterDisp = document.createElement('p')



function gameRound(buttonID)
{    
        playerSelection = buttonID
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        resultsCont.appendChild(resultsDisp)
        counterCont.appendChild(counterDisp)
}


function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection)
        {
           resultsDisp.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}, DRAW!!`
        }
    else if( 
        (playerSelection == "rock" && (computerSelection == "paper" || computerSelection == "scissors")) ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "rock") )
        {
            resultsDisp.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}, YOU WON!!`
            playerScore = playerScore + 1
        }
    else    
        {
            resultsDisp.textContent = `Player: ${playerSelection}, Computer: ${computerSelection}, YOU LOST!!`
            computerScore = computerScore + 1
        }

        counterDisp.textContent = `Player: ${playerScore} Computer: ${computerScore}`
}

function getComputerChoice()
{
    let choice = ["rock", "paper", "scissors"];
    let randNumber = Math.floor(Math.random() * 3)
    return choice[randNumber]
}