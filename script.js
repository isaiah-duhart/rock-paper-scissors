const choices = ["rock", "paper", "scissors"]
let userScore = 0
let computerScore = 0

function getComputerChoice(){
    const index = Math.floor(Math.random() * 3)

    return choices[index]
}

function playRound(userChoice, computerChoice){
    const userChoiceIndex = choices.indexOf(userChoice)
    const computerChoiceIndex = choices.indexOf(computerChoice)

    switch (userChoiceIndex - computerChoiceIndex){
        case 0:
            console.log(`tie! ${userChoice} ties ${computerChoice}`)
            break
        case 1:
        case -2:
            console.log(`you win! ${userChoice} beats ${computerChoice}`)
            userScore++
            break
        case -1:
        case 2:
            console.log(`you lose! ${computerChoice} beats ${userChoice}`)
            computerScore++
            break
        default:
            console.log(`Something went wrong...
            userChoice: ${userChoice} index: ${userChoiceIndex}
            computerChoice: ${computerChoice} index: ${computerChoiceIndex}`)
            break
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const userChoice = prompt("enter rock, paper, or scissors:").toLowerCase()

        if (choices.includes(userChoice)){
            const computerChoice = getComputerChoice()
            playRound(userChoice, computerChoice)
        } else {
            console.log(`${userChoice} is not rock, paper, or scissors, enter valid choice`)
        }
    }

    console.log(`game over!
    you won ${userScore} rounds
    computer won ${computerScore} rounds`)
}

playGame()