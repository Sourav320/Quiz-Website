const quizDB=[{
    question: "1) HTML stands for",

   a:"HighText Machine Language",
   b:"HyperText and links Markup Language",
   c:"HyperText Markup Language",
   d:"None of these",
   ans:"ans3"
},
{
    question:"2) The correct sequence of HTML tags for starting a webpage is",

a:"Head, Title, HTML, body",
b:"HTML, Body, Title, Head",
c:"HTML, Head, Title, Body",
d:"HTML, Head, Title, Body",
ans:"ans4"
},
{
    question:"3) The full form of CSS is: ",
    a:"Cascade style sheets",
    b:"Color and style sheets",
    c:"Cascading style sheets",
    d:"None of the above",
    ans:"ans3"
},
{
    question:"4) Which of the following is the correct syntax for referring the external style sheet?",
    a:"<style src = example.css>",
    b:"<style src = example.css>",
    c:"<stylesheet> example.css </stylesheet>",
    d:"<link rel=stylesheet type=text/css href=example.css>",
    ans:"ans4"
},
{
    question:"5) Which type of JavaScript language is ___",
    a:"Object-Oriented",
    b:"Object-Based",
    c:"Assembly-language",
    d:"High-level",
    ans:"ans2"
},
{
    question:"6)  Which one of the following also known as Conditional Expression:",
    a:"Alternative to if-else",
    b:"Switch statement",
    c:"If-then-else statement",
    d:"immediate if",
    ans:"ans4"
}
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;

const loadQuestion = () => {
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;

}

loadQuestion();

const getCheckAnswer= () =>{
    let answer;
    answers.forEach((curAnsElem) =>{
       if(curAnsElem.checked){
        answer=curAnsElem.id;
       }
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
         <h3> You scored ${score}/${quizDB.length} ✌️ </h3>
         <button class="btw" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});