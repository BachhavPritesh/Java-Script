var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var pauseButton = document.querySelector('#pauseButton');
var resetButton = document.querySelector('#resetButton');
var statusMessage = document.querySelector('#statusMessage');
var videoC = document.querySelector('.video-container');

var current = 0;
var high = 0;
var time1 = 10;
var track = false;
var idTrack = null;
var paused = false;

function loadContent(){
    dataLoad();
    displayMessage();
    statuMsg("👋 Welcome back! Ready to beat your high score?");
}

function dataLoad(){
    var temp = localStorage.getItem('highScore');
    if(temp != null){
        high = parseInt(temp);
    } else {
        high = 0;
    }
}

function displayMessage(){
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;
}

function statuMsg(msg){
    statusMessage.textContent = msg;
}

function endGame(){
    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false;
    pauseButton.disabled = true;

    if(current > high){
        localStorage.setItem('highScore', current);
        high = current;
        displayMessage();
        statuMsg("🎉 Great job! New high score! 🏆");
        videoC.style.display = 'flex';
    } else {
        statuMsg("😕 Oops! You didn’t beat your high score. Try again! 💪");
    }
}

function startGame(){
    track = true;
    paused = false;
    time1 = 10;
    current = 0;
    clickButton.disabled = false;
    startButton.disabled = true;
    pauseButton.disabled = false;
    statuMsg("🚀 Game started! Click as fast as you can! 🖱⏳");
    idTrack = setInterval(function(){
        if(!paused){
            time1--;
            if(time1 <= 0){
                endGame();
            }
            displayMessage();
        }
    }, 1000);
    videoC.style.display = 'none';
}

function clickMe(){
    if(track && !paused){
        current++;
        displayMessage();
    }
}

function pauseGame(){
    if(!track) return;
    paused = !paused;
    if(paused){
        statuMsg("⏸ Game paused! Click resume to continue!");
        pauseButton.textContent = "Resume";
        clickButton.disabled = true;
    } else {
        statuMsg("▶ Game resumed! Keep clicking!");
        pauseButton.textContent = "Pause";
        clickButton.disabled = false;
    }
}

function resetGame(){
    localStorage.removeItem('highScore');
    high = 0;
    current = 0;
    time1 = 10;
    displayMessage();
    statuMsg("🔄 Game has been reset. Ready for a fresh start! 🌟");
    clearInterval(idTrack);
    track = false;
    paused = false;
    startButton.disabled = false;
    clickButton.disabled = true;
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
    videoC.style.display = 'none';
}

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', clickMe);
pauseButton.addEventListener('click', pauseGame);
resetButton.addEventListener('click', resetGame);

// ✅ FIX: Load high score after refresh
window.addEventListener('load', loadContent);
