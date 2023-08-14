let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const statement_p = document.querySelector(".statement p");
const scoreboard = document.querySelector(".scoreboard");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

// generate computer choice
function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNum = Math.floor(Math.random() * 3)
    return (choices[randomNum]);
}

function convertLetters(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// function that executes when user has won the game
function win(userChoice, computerChoice) {
    userScore++;
    console.log("Win")
    userScore_span.innerHTML = userScore;
    compScore.innerHTML = compScore;
    const smallUserChoice = "user".fontsize(3).sub();
    const smallCompChoice = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    statement_p.innerHTML = `${convertLetters(userChoice)}${smallUserChoice} beats ${convertLetters(computerChoice)}${smallCompChoice} You Win!`;
    userChoice_div.classList.add("win")
    setTimeout(function () {
        userChoice_div.classList.remove("win")
    }, 300);
}

// function that executes when user lost the game
function lose(userChoice, computerChoice) {
    compScore++;
    console.log("Lose")
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserChoice = "user".fontsize(3).sub();
    const smallCompChoice = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    statement_p.innerHTML = `${convertLetters(userChoice)}${smallUserChoice} beats ${convertLetters(computerChoice)}${smallCompChoice} You Lose!`;
    userChoice_div.classList.add("lose")
    setTimeout(function () {
        userChoice_div.classList.remove("lose")
    }, 300);
}

// function when user and comp chooses the same choice = draw
function draw(userChoice, computerChoice) {
    console.log("Draw")
    const smallUserChoice = "user".fontsize(3).sub();
    const smallCompChoice = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    statement_p.innerHTML = `${convertLetters(userChoice)}${smallUserChoice} and ${convertLetters(computerChoice)}${smallCompChoice} it's a Draw!`;
    userChoice_div.classList.add("draw")
    setTimeout(function () {
        userChoice_div.classList.remove("draw")
    }, 300);
}

// Gets the user input
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}




// Main gameplay
function main() {
    rock.addEventListener("click", function () {
        game("r")
    });
    paper.addEventListener("click", function () {
        game("p")
    });
    scissors.addEventListener("click", function () {
        game("s")
    });

}

main()