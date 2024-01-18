let userScore = 0;
let copmScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");

const userScorePara = document.querySelectorAll("#user-score");
const compScorePara = document.querySelectorAll("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
};

const drawGame = () => {
   console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = 'you win ! your ${userChoice} beats ${compChoice}';
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = 'you lose!. ${compChoice} beats your ${userChoice}';
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice)  => {
   console.log("user choice = ", userChoice);

    // Generate computer choiceS
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice);

    if(userChoice === CompChoice) {
        //draw Game
        drawGame();

    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper

            userWin = CompChoice === "paper"? false : true;
        } else if (userChoice === "paper") {

            // rock, scissors
            userWin = CompChoice === "scissors"? false : true;
        }  else {
            //rock, paper
           userWin =  CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
          playGame(userChoice);
    });
});