let currentQuestion = 0;
let totalScore = 0;
let timer;
let timeLeft = 30;

const questions = {
"Software Developer":[
"Tell me about yourself",
"Explain OOP concepts",
"What is REST API?",
"Explain a project you built",
"What are data structures?"
],

"Web Developer":[
"What is HTML, CSS, JS?",
"What is responsive design?",
"Explain flexbox",
"What is DOM?",
"Explain a website you made"
],

"Data Analyst":[
"What is data cleaning?",
"What is Excel used for?",
"Explain data visualization",
"What is SQL?",
"Describe a data project"
],

"HR Interview":[
"Tell me about yourself",
"Why should we hire you?",
"What are your strengths?",
"What are your weaknesses?",
"Where do you see yourself in 5 years?"
],

"Product Manager":[
"How do you prioritize features?",
"Explain a product you like",
"How do you handle failure?",
"How do you gather user feedback?"
]
};

function startInterview(){
currentQuestion = 0;
totalScore = 0;
nextQuestion();
}

function nextQuestion(){

let role = document.getElementById("role").value;
let roleQuestions = questions[role];

if(currentQuestion >= roleQuestions.length){
finishInterview();
return;
}

document.getElementById("question").innerText =
roleQuestions[currentQuestion];

document.getElementById("progressText").innerText =
"Question " + (currentQuestion+1) + " / " + roleQuestions.length;

document.getElementById("answer").value = "";
document.getElementById("feedback").innerHTML = "";
document.getElementById("scoreBar").value = 0;

startTimer();

currentQuestion++;
}

function checkAnswer(){
let answer = document.getElementById("answer").value;

let score = 0;

if(answer.length > 20) score += 30;
if(answer.length > 50) score += 30;
if(answer.toLowerCase().includes("example")) score += 20;
if(answer.toLowerCase().includes("project")) score += 20;

totalScore += score;

document.getElementById("feedback").innerHTML =
"🔥 AI Score: " + score + "/100";
document.getElementById("scoreBar").value = score;
}

function startTimer(){
clearInterval(timer);
timeLeft = 30;

timer = setInterval(()=>{
timeLeft--;
document.getElementById("timer").innerText =
"⏱️ " + timeLeft + "s";

if(timeLeft <= 0){
clearInterval(timer);
nextQuestion();
}
},1000);
}

function finishInterview(){
clearInterval(timer);

document.querySelector(".card").innerHTML = `
<h2>🎯 Interview Finished</h2>
<h3>Your Total Score: ${totalScore}</h3>
<p>Great job! Keep improving 🚀</p>
<button onclick="location.reload()">Restart</button>
`;
}

function startVoice(){
const recognition = new webkitSpeechRecognition();

recognition.onresult = function(event){
document.getElementById("answer").value =
event.results[0][0].transcript;
}

recognition.start();
}