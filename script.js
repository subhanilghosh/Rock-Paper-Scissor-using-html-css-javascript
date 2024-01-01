const displayComputerchoice = document.getElementById("computer-choice");
const displayUserchoice = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const choices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

choices.forEach((choices) => {
    choices.addEventListener("click",(e)=>{
        userChoice = e.target.id;
        displayUserchoice.innerHTML = userChoice;
        randomComputerchoices();
        getResult();
    });
});

function randomComputerchoices(){
    const randomNum = Math.floor(Math.random()*3)+1;
    
    if(randomNum === 1){
        computerChoice = "rock";
    }
    if(randomNum === 2){
        computerChoice = "paper";
    }
    if(randomNum === 3){
        computerChoice = "scissor";
    }
    displayComputerchoice.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "Draw!";
    }
    if(computerChoice === "rock" && userChoice === "paper"){
        result = "You Win!";
    }
    if(computerChoice === "paper" && userChoice === "rock"){
        result = "You Lost!";
    }
    if(computerChoice === "paper" && userChoice === "scissor"){
        result = "You Win!";
    }
    if(computerChoice === "scissor" && userChoice === "paper"){
        result = "You Lost!";
    }
    if(computerChoice === "rock" && userChoice === "scissor"){
        result = "You Lost!";
    }
    if(computerChoice === "scissor" && userChoice === "rock"){
        result = "You Win!";
    }
    displayResult.innerHTML = result;
}