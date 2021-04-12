// Element Grabs
const playButton = document.getElementById('playButton');
const prompt = document.getElementById('prompt');

const playerHand = document.getElementById('playerHand');
const computerHand = document.getElementById('compHand');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Score Count Set Up
const playerScore = document.getElementById('pscore');
p = 0;
const computerScore = document.getElementById('cscore');
c = 0;

//Initialize Game
playButton.addEventListener('click', e => {
    e.target.style = "display: none;",
    matchDiv.style = "display: block"
})

// Event Listeners
rockButton.addEventListener('click', playerChoice => {
    playerHand.src = 'assets/rock.png';
    playerChoice = "rock";
    compChooses(playerChoice);
})
paperButton.addEventListener('click', playerChoice => {
    playerHand.src = 'assets/paper.png';
    playerChoice = "paper";
    compChooses(playerChoice);
})
scissorsButton.addEventListener('click', playerChoice => {
    playerHand.src = 'assets/scissors.png';
    playerChoice = "scissors";
    compChooses(playerChoice);
})

// Computer Chooses Its Play
function compChooses(playerChoice) {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    const compChoice = (options[random]);
    if (compChoice === "rock") {
        computerHand.src = 'assets/rock.png';
    } else if (compChoice === "paper") {
        computerHand.src = 'assets/paper.png';
        } else { computerHand.src = 'assets/scissors.png';
    } playMatch(playerChoice, compChoice);
}

// The Big Showdown
function playMatch(playerChoice, compChoice) {
    console.log("comp chooses " + compChoice);
    console.log("player chooses " + playerChoice);
 if(playerChoice == compChoice) {
    prompt.innerText = "It's A Tie!"
    setTimeout(resetPrompt, 1500);
 } else if (playerChoice == "rock" && compChoice == "scissors" || playerChoice == "scissors" && compChoice == "paper" || playerChoice == "paper" && compChoice == "rock") {
            prompt.innerText = "You Win!";
            setTimeout(resetPrompt, 1500);
            p++;
            playerScore.innerText = p;
            console.log("Player Score is " + p)
        } else {
            prompt.innerText = "Computer Wins";
            setTimeout(resetPrompt, 1500)
            c++;
            console.log("Comp Score is " + c)
            computerScore.innerText = c;
        }
    }

// Prompt Reset
function resetPrompt() {
    prompt.innerText = "Choose an Option";
}

//Score Reset
function reset() {
    c = 0;
    p = 0;
    computerScore.innerText = c;
    playerScore.innerText = p;
    playerHand.src = 'assets/rock.png';
    computerHand.src = 'assets/rock.png';
}