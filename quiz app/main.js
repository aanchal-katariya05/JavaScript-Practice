let questions = [
    {
        question :  " What does HTML stand for? ",

        options : [
         "Hyper Text Markup Language",
         "Hope Tool Markup Language",
         "Hyperlinks and Text Markup Language",
         "High Text Machine Language"
        ],

        answer : "Hyper Text Markup Language" 
    },
    {
        question : "Which keyword is used to declare variable in JS?",

        options : [
          "var",
         "string",
         "int",
         "float"
        ],

        answer: "var",
    },
    {
        question : "Which language is used for styling ?",

        options : [
            "HTML",
         "Java",
         "CSS",
         "Python"
        ],

        answer : "CSS",
    },
    {
        question :  "What does CSS stand for?" ,

        options : [
            "cascading sheets" , 
            " Cascading Style Sheets",
            "ColorFull Style sheets",
            "computer Style Sheets"
        ],

        answer : "Cascading Style Sheets",
    },
    {
        question : "Which company developed Java?" ,

        options : [
      "Microsoft",
      "Sun Microsystems",
      "Google",
      "Apple"
        ],

        answer : "Sun Microsystems",
    }
]

let currentQuestion = 0;
let answered = false;
function showQuestion(){
    let current = questions[currentQuestion];
    document.getElementById("question").innerText = current.question;

    // now options which shown on the buttons 

    document.getElementById("btn1").innerText = current.options[0];
    document.getElementById("btn2").innerText = current.options[1];
    document.getElementById("btn3").innerText = current.options[2];
    document.getElementById("btn4").innerText = current.options[3];

    // for default color

    document.getElementById("btn1").style.backgroundColor = "#334155"
    document.getElementById("btn2").style.backgroundColor = "#334155"
    document.getElementById("btn3").style.backgroundColor = "#334155"
    document.getElementById("btn4").style.backgroundColor = "#334155"
}
showQuestion();

function nextQuestion() {
    if( currentQuestion < questions.length - 1){
        currentQuestion++;
        answered = false;
        showQuestion();
    }
}

let score = 0;

function checkAnswer(button) {
    if(answered ==true){
        return;
    }
  let current = questions[currentQuestion];

   if(button.innerText == current.answer){
    score++
    answered = true;
    alert("Answer is correct");
    button.style.backgroundColor = "green";
    
   }
   else {
    alert("Answer is Wrong please try again !!");
    button.style.backgroundColor = "red";
   }
   answered = true;
   document.getElementById("score").innerText = "Score : " + score;
}
