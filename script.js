const quiz = [
    {

    Question: "Q1: Which will legally declare, construct, and initialize an array?",
    a: "int [] myList = {1 2, 3};",
    b: "int [] myList = (5, 8, 2);",
    c: "int myList [] [] = {4,9,7,0};",
    d: "int myList [] = {4, 3, 7};",
    ans:"ans4"

    },
{
    Question: "Q2:Which is a reserved word in the Java programming language?",
    a: "Mathod",
    b: "native",
    c: "subclass",
    d: "array",
    ans: "ans2"
},

{
    Question: "Q3: Which is a valid keyword in java?",
    a: "interface",
    b: "string",
    c: "float",
    d: "unsigned",
    ans: "ans1"
},
{
    Question: "Q4: You want subclasses in any package to have access to members of a superclass. Which is the most restrictive access that accomplishes this objective?",
    a: "Public",
    b: "Private",
    c: "protected",
    d: "transient",
    ans: "ans3"
},
{
    Question: "Q5: Which one of these lists contains only Java programming language keywords?",
    a: "class,if,void,long,int,continue",
    b: "goto, instanceof,native,finally,default,throws",
    c: "try,virtual,throw,final,volatile,transient",
    d: "byte,break,assert,switch,include",
    ans: "ans2"
}
];

const Question = document.querySelector('.Question');
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll('.answer');
const Showscore = document.querySelector('#Showscore');
let Questioncount = 0;
let score = 0;
const loadQuestion = () => {

    const Questionlist = quiz[Questioncount];
    Question.innerText = Questionlist.Question;
    
    option1.innerText = Questionlist.a;
    option2.innerText = Questionlist.b;
    option3.innerText = Questionlist.c;
    option4.innerText = Questionlist.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }    
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quiz[Questioncount].ans){
        score++;
    };
    Questioncount++; 

    if(Questioncount<quiz.length){
        loadQuestion();
    }
    else{
        Showscore.innerHTML =  `
        <h3> Your Score ${score}/${quiz.length} </h3>
        <button class = "btn" onclick="location.reload()"> Play Again </button>
        `;
        Showscore.classList.remove('scoreArea');
    }
});