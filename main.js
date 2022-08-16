function getComputerChoice()
{
    let choice = ["rock", "paper", "scissors"];
    let randNumber = Math.floor(Math.random() * 3)
    return choice[randNumber]
}

console.log(getComputerChoice())
