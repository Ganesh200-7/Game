 let user_score = 0;
 let computer_score = 0;


 const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg")
const userscorenum = document.querySelector("#user_score");
const compscorenum = document.querySelector("#comp_score");

const drawgame = () =>{
    console.log(" game was draw.");
           msg.innerText = " game was draw ! play again. " ;
           msg.style.backgroundColor = "rgb(11,12,12)";
};


const showWinner = (userwin, user_choice , comp_choice) =>{
    if(userwin){
        user_score++;
            userscorenum.innerText = user_score;
        console.log("you Win!!");
        msg.innerText = `you win!!  Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computer_score++;
        compscorenum.innerText = computer_score;
        console.log(" you lost !");
        msg.innerText =`you lost. ${comp_choice} beats your ${user_choice}`; ;
         msg.style.backgroundColor = "red";
    }
}


    const gencomp_choice =() => {
    let options = ["rock" , "paper" , "scissors"];
  let randidx =  Math.floor(Math.random() *3);
    return options[randidx];
}


const playGame = (user_choice) =>{
    console.log("user_choice = " ,user_choice);
const comp_choice = gencomp_choice();
    console.log(" comp_choice = " ,comp_choice);


if(user_choice== comp_choice)
    drawgame();
else {
    let userwin = true;
    if(user_choice === "rock"){
userwin=comp_choice === "paper" ? false: true; 
    }
    else if(user_choice === "paper"){
userwin=comp_choice === "scissors" ? false : true;
    }
    else {
         userwin = comp_choice == " rock" ? false : true;
    }
showWinner(userwin,user_choice,comp_choice);
}
};


 choices.forEach((choice) =>{
choice.addEventListener("click" , ()=>{
let  user_choice = choice.getAttribute("id");
// console.log("choice was clicked:" , user_choice);
playGame(user_choice);
});
});
