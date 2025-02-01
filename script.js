const choices = ["rock", "paper", "scissors"]
ROCK = 0
PAPER = 1
SCISSORS = 2
let userScore = 0
let computerScore = 0

function playRound(userChoiceIndex){
    const computerChoiceIndex = Math.floor(Math.random() * 3)

    switch (userChoiceIndex - computerChoiceIndex){
        case 0:
            alert(`tie! ${choices[userChoiceIndex]} ties ${choices[computerChoiceIndex]}`)
            break
        case 1:
        case -2:
            alert(`you win! ${choices[userChoiceIndex]} beats ${choices[computerChoiceIndex]}`)
            userScore++
            break
        case -1:
        case 2:
            alert(`you lose! ${choices[computerChoiceIndex]} beats ${choices[userChoiceIndex]}`)
            computerScore++
            break
        default:
            alert(`Something went wrong...
            userChoice: ${choices[userChoiceIndex]} index: ${userChoiceIndex}
            computerChoice: ${choices[computerChoiceIndex]} index: ${computerChoiceIndex}`)
            break
    }
}

function updateScore(){
    const userScoreElement = document.querySelector("#userScore")
    const computerScoreElement = document.querySelector("#computerScore")

    userScoreElement.textContent = userScore
    computerScoreElement.textContent = computerScore

    if (userScore < 5 && computerScore < 5)
        return

    if (userScore >= 5)
        alert("Game OVER! You won!")
    else if (computerScore >= 5)
        alert("Game OVER! You lost!")

    userScore = 0
    computerScore = 0

    userScoreElement.textContent = 0
    computerScoreElement.textContent = 0
}

const menu = document.querySelector(".menu")

menu.addEventListener("click", (event) => {
    switch(event.target.id){
        case "rock":
            playRound(ROCK)
            break
        case "paper":
            playRound(PAPER)
            break
        case "scissors":
            playRound(SCISSORS)
            break
        default:
            alert(`ERORR: ${event.id} is not rock, paper, or scissors, select valid choice`)
    }
    updateScore()
})