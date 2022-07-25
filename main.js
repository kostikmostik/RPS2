let playerSelection
let computerSelection
let playerScore
let computerScore

game()

function game()
{    
        playerSelection = prompt()
        computerSelection = getComputerChoice()
        let result =  playRound(playerSelection, computerSelection)
        console.log("Player: %d vs Computer: %d, %d", playerSelection, computerSelection, result)
        //console.log("Player")
}


function playRound(playerSelection, computerSelection){

    if( (playerSelection == "rock" && (computerSelection == "paper" || computerSelection == "scissors")) ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "" && computerSelection == "rock") )
        {
            return "player won"  
        }
    else    
        {
            return "computer won"
        }
}

function getComputerChoice()
{
    let choice = ["rock", "paper", "scissors"];
    let randNumber = Math.floor(Math.random() * 3)
    return choice[randNumber]
}