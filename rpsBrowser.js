
// Global vars to keep track of score
let playerScore = 0,
    computerScore = 0;


// event listener to start game
let buttonArray = document.querySelectorAll(".game");
let resetBtn = document.querySelector("#reset");

buttonArray.forEach(function(btn){
    btn.addEventListener("click", function(){

        let computerMove = computerPlay();
        
        setTimeout(function() {
            updateScore(playRound(btn.id, computerMove));
        }, 2000);
    });
});

resetBtn.addEventListener("click", function(){
    var playerBoard = document.querySelector("#playerScore");
    var computerBoard = document.querySelector("#computerScore");

    playerScore = 0;
    computerScore = 0;
    computerBoard.textContent = "Computer: " + computerScore;
    playerBoard.textContent = "Player: " + playerScore;
});



function updateScore(result) {
    
    var playerBoard = document.querySelector("#playerScore");
    var computerBoard = document.querySelector("#computerScore");

    switch(result){
        case 0:
            break;
        case 1:
            computerScore++;
            computerBoard.textContent = "Computer: " + computerScore;
            break;
        case 2:
            playerScore++;
            playerBoard.textContent = "Player: " + playerScore;
            break;
            

    }
}

// used for computers round
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// seed the computers choice, then use timeout functions 
// and temporary elements to "let the computer think" and 
// display its choice

function computerPlay(){
    
    
    let pcSeed = getRandomInt(3);
    
    let container = document.querySelector("#game");

    const para = document.createElement("h1");
    const cycleChoice = document.createElement("h2")

    para.textContent = "I Choose...";
    cycleChoice.style.color = "#FFFFFF";

    container.appendChild(para);
    container.appendChild(cycleChoice);

    setTimeout(function(){
        switch (pcSeed){
            case 0:
                cycleChoice.textContent =  "Rock";
                break;
            case 1:
                cycleChoice.textContent =  "Paper";
                break;
            case 2:
                cycleChoice.textContent =  "Scissors";
                break;
        }
    }, 2000);


    setTimeout(function(){
        container.removeChild(para);
        container.removeChild(cycleChoice);
    }, 5000);

    switch (pcSeed){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock"){
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 2;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return 0;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 2;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return 0;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 2;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 1;
    }
}

