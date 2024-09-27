let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll("#choice");
let msgeBox = document.querySelector(".msge");
let ScoreOfUser = document.querySelector(".user-score");
let ScoreOfComputer = document.querySelector(".comp-score");


let genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex];
}

let drawGame = () => {
    msgeBox.innerText = "It is a Tie! Play Again"
    msgeBox.style.backgroundColor = "purple";
}

let showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin == true) {
        userScore++;
        ScoreOfUser.innerText = userScore;
        msgeBox.style.backgroundColor = "green";
        msgeBox.innerText = `User Win! "Your ${userChoice} beats ${computerChoice}"`;
    }

    else {
        compScore++;
        ScoreOfComputer.innerText = compScore;
        msgeBox.style.backgroundColor = "red";
        msgeBox.innerText = `User Win! "${computerChoice} beats your ${userChoice}"`;
    }
}

let playGame = (userChoice) => {
    let computerChoice = genComputerChoice();
    if (userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (computerChoice == "rock") {
            if (userChoice == "paper") {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        else if (computerChoice == "paper") {
            if (userChoice == "scissor") {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        else if (computerChoice == "scissor") {
            if (userChoice == "rock") {
                userWin = true;
            }
            else {
                userWin = false;
            }
        }
        showWinner(userWin, userChoice, computerChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("class");
        playGame(userChoice);
    })

});