const questions = {
"Software Developer":[
"Tell me about yourself",
"Explain OOP concepts",
"What is REST API?",
"Explain a project you built",
"What is debugging?",
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
"What are your strengths?",
"What are your weaknesses?",
"Why should we hire you?",
"Where do you see yourself in 5 years?"
],

"Product Manager":[
"How do you prioritize features?",
"Explain a product you like",
"How do you handle failure?",
"How do you gather user feedback?"
]
};

let currentQuestion = "";

function startInterview(){

let role = document.getElementById("role").value;

let roleQuestions = questions[role];

currentQuestion = roleQuestions[Math.floor(Math.random()*roleQuestions.length)];

document.getElementById("question").innerText = currentQuestion;

}

function checkAnswer(){

let answer = document.getElementById("answer").value;

let score = 0;

if(answer.length > 20) score += 30;
if(answer.length > 50) score += 30;
if(answer.includes("example")) score += 20;
if(answer.includes("project")) score += 20;

document.getElementById("feedback").innerHTML =
"🔥 AI Score: " + score + "/100 <br>" +
(score < 50 ? "Improve your answer!" :
score < 80 ? "Good but needs examples" :
"Excellent answer!");
document.getElementById("scoreBar").value = score;

}