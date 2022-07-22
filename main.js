let playerSelection = "rock"

game()

function game()
{
    let wonN = 0
    let lostN = 0

    for(let i = 0; i < 5; ++i)
    {
        let result = playRound(playerSelection, getComputerChoice())
        if(result === "You won")
          {wonN++
        }
        
        if(result === "You lost")
          {lostN++
        }
    }

    console.log("You won %d times and lost %d times", wonN, lostN)
}


function playRound(playerSelection, computerSelection){

    if( (playerSelection == "rock" && (computerSelection == "paper" || computerSelection == "scissors")) ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "" && computerSelection == "rock") )
        {
            return "You won"  
        }
    else    
        {
            return "You lost"
        }
}

function getComputerChoice()
{
    let choice = ["rock", "paper", "scissors"];
    let randNumber = Math.floor(Math.random() * 3)
    return choice[randNumber]
}