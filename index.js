var readlineSync = require("readline-sync");
var chalk = require("chalk");
score = 0;

// Welcome User

var userName = readlineSync.question("Hello , What's Your name :: ");
console.log("Welcome " + chalk.yellowBright(userName.toUpperCase()) +
" to" + chalk.bgBlack ( "  MS-Dhoni Quiz !!  "));

// Quiz Rules

console.log(chalk.yellow("\n Quiz Rules :  \n"));
console.log("1. There are total of 8 Questions.")
console.log("2. Each right answer will reward +1 and vice-versa. ")
console.log("Let's play quiz. ")

// Questions Array

var quiz = [{
question :"\n 1. In which Indian city was MS Dhoni born? \n\t [a] Ranchi \n\t [b] patna" + chalk.bold.white("\n Enter your Choice: "),
correctAnswer : "a"
},
{question :"\n 2. For which state did he make his Ranji Trophy debut? \n\t [a] Bihar \n\t [b] Jharkhand"  + chalk.bold.grey("\n Enter your Choice: "),
correctAnswer : "a"
},
{question :"\n 3. At which railway station did Dhoni serve as a Travelling Ticket Examiner? \n\t [a] Satna \n\t [b] Kharagpur"  + chalk.bold.grey("\n Enter your Choice: "),
correctAnswer : "b"
}, 
{question :"\n 4. How much did Dhoni score in his first-ever match for India? \n\t [a] Zero \n\t [b] Half-Century"  + chalk.bold.grey("\n Enter your Choice: "),
correctAnswer : "a"
}, 
{question :"\n 5. Against which country did he score his first ODI ton? \n\t [a] Bangladesh \n\t [b] Pakistan"  + chalk.bold.grey("\n Enter your Choice: "),
correctAnswer : "b"
}, 
{question :"\n 6. Which head of state once told Dhoni on air that long hair suited him? \n\t [a] Pervez Musharraf \n\t [b] Manmohan Singh"  + chalk.bold.grey("\n Enter your Choice: "),
correctAnswer : "a"
}, 
{question :"\n 7. How much did Dhoni score in the 2011 WC final against Sri Lanka? \n\t [a] 91 not-out \n\t [b] 88 not-out"  + chalk.bold.grey("\n Enter your Choice: "),
correctAnswer : "a"
}, 
{question :"\n 8. Which of the following IPL teams has MS Dhoni played for? \n\t [a] Gujarat Lions \n\t [b] Rising Pune Supergiant"  + chalk.bold.grey("\n Enter your Choice: "),
correctAnswer : "b"
}]



// Function

function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("You are right!!"))
    score++
  } else{
    console.log(chalk.red("you are wrong!!"))
    score--
  }
  console.log("Your current score is: " + chalk.yellow.underline.bold(score))
  console.log("-----------------------");
  console.log("-----------------------")

}

// For statement and Function calling

for (i=0; i<quiz.length; i++){
  var quizQuestions = quiz[i]
  play(quizQuestions.question,quizQuestions.correctAnswer);
}


// Printing highest Scores

var highestScorers = [
  {
    name : "Ram",
    score : 8
  },{
    name : "Shayam",
    score : 6
  },
]

console.log( chalk.yellowBright.bold("Your Final Score is : ") + chalk.greenBright.bold(score))
console.log("-----------------------")
console.log("-----------------------")


console.log("List of High scorer QuizHeads: ")
for(i=0; i<highestScorers.length; i++){
  var hs = highestScorers[i];
  console.log("Name: "+ hs.name);
  console.log("Score: "+ hs.score);
  console.log("**********************");
}

