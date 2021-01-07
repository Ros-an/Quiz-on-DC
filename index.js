var readlineSync = require("readline-sync");

var score = 0;

var dcQuizQuestion =[
  {
    question:"Who's the fastest man?\n",
    answer:"Flash"
  },
  {
    question: "What is the weakness of Superman?\n",
    answer:"Kryptonite"
  },
  {
    question:"Which hero has the power of 7 gods?\n",
    answer: "Shazam"
  }
];


function welcome(){
  var userName = readlineSync.question("What's your name?\n");
  console.log("Welcome "+ userName +" let's see much you know about DC Universe");
}

function play(question, answer) {
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right!");
    score+=1;
  }else {
    console.log("wrong!");
  }
  console.log("Current Score: ",score);
  console.log("----------------------");
}

function game(){
  for(var i=0;i<dcQuizQuestion.length;i++){
  play(dcQuizQuestion[i].question,dcQuizQuestion[i].answer);
}
}
welcome();
game();

console.log("YOU SCORED: ",score);
console.log("----------------------");
console.log("Here's the answer.");

for(var x=1;x<=dcQuizQuestion.length;x++){
  console.log(x+"."+dcQuizQuestion[x-1].answer);
}