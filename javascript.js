var clickedTime; 
var createdTime; 
var reactionTime;

function Test() {
    var StartTest = document.getElementById('ReactionTime');
    StartTest.style.zIndex = "5";
    var time = Math.floor(Math.random() * 10);
    var sec = time * 1000;
    console.log(sec);
    var timeout = setTimeout(ClickShow, sec);
    document.getElementById("ReactionTimeClick").addEventListener("click", Click);
    document.getElementById("ReactionTime").addEventListener("click", Early);
}

function Early() {
    document.getElementById("ClickedEarly").style.zIndex = 11;
    clearTimeout(timeout);
}

function ClickShow() {
    document.getElementById("ReactionTimeClick").style.zIndex = 10;
    createdTime = Date.now();
}

function Click() {
    document.getElementById("ReactionResult").style.zIndex = 10;
    clickedTime = Date.now();
    reactionTime = (clickedTime-createdTime);
    document.getElementById("result-text").innerHTML= "Your Reaction Time is: " + reactionTime + " milliseconde";
}

function status() {
    document.getElementById("Status").style.zIndex = 12;
}