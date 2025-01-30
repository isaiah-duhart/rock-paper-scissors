const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const index = Math.floor(Math.random() * 3)

    return choices[index]
}

function compareChoices(userChoice, computerChoice){
    const userChoiceIndex = choices.indexOf(userChoice)
    const computerChoiceIndex = choices.indexOf(computerChoice)

    switch (userChoiceIndex - computerChoiceIndex){
        case 0:
            console.log("tie!")
            break
        case 1:
        case -2:
            console.log("you win!")
            break
        case -1:
        case 2:
            console.log("you lose!")
            break
        default:
            console.log(`Something went wrong...
            userChoice: ${userChoice} index: ${userChoiceIndex}
            computerChoice: ${computerChoice} index: ${computerChoiceIndex}`)
            break
    }
}

while (true) {
    const userChoice = prompt("enter rock, paper, or scissors:").toLowerCase()

    if (choices.includes(userChoice)){
        const computerChoice = getComputerChoice()
        console.log(computerChoice)
        compareChoices(userChoice, computerChoice)
    } else {
        console.log(`${userChoice} is not rock, paper, or scissors, enter valid choice`)
    }
}