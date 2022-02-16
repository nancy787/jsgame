'use strict';

// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 😀
// */
// 
function message(message)
{
  document.querySelector(".message ").textContent=message;
}
function number(num)
{
  document.querySelector(".number").textContent=num;
}
document.querySelector(".score").textContent="20";
// (document.querySelector(".guess").value=13);
document.querySelector(".score").style.color="green";
// document.querySelector(".number").textContent="?";
number("?");
let score=20;
let  highscore=0;
var number=Math.trunc(Math.random()*20)+1;
document.querySelector(".check ").addEventListener("click",function()
{
  document.querySelector(".message ").style.color="red ";
  var guess=document.querySelector(".guess").value;
  
  if(!guess)
  {
    // document.querySelector(".message ").textContent="no number selected";
    message("no number selected");
  }else if(guess==number){
    document.querySelector("body").style.backgroundColor="green ";
    // document.querySelector(".number").textContent=number;
    number(number)
    document.querySelector(".message ").textContent=` correct ${number}  is selected you win`
     
    highscore++;
    document.querySelector(".highscore").textContent=`${highscore}`;
  }
  else if(guess>number)
  {
    if(score>0)
    {
      // document.querySelector(".message").textContent=" too high";
      message("too high");
      score--;
      document.querySelector(".score").textContent=`${score}`;
      
    }
    else
    {
      // document.querySelector(".message").textContent=`oops you loose!`;
      message("opps you loose!");
    }

  }
  else if(guess<number)
  {
    if(score>0)
    {
      // document.querySelector(".message").textContent=" too low";
      message("too low");
      score--;
      document.querySelector(".score").textContent=`${score}`;
      
    }
    else
    {
      // document.querySelector(".message").textContent=`oops you loose!`;
      message("oops you loose");
    }
  }
  else
  {
    
  }

}
)
document.querySelector(".again").addEventListener("click",function()
{
  let score=20;
let  highscore=0;
var number=Math.trunc(Math.random()*20)+1;
// document.querySelector(".message").textContent="Start guessing...";
message("Start guessing");
document.querySelector(".number").textContent="?";
document.querySelector(".guess").value=" ";
document.querySelector("body").style.backgroundColor="#222";
document.querySelector(".score").textContent=score;


});

