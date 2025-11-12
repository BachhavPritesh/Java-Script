// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');

// Test texts
const testTexts = [
"The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
"Technology has revolutionized the way we communicate and work in the modern digital era.",
"Typing speed is an essential skill for anyone working with computers in today's workplace."
];
// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

//3
function webLoad(){
    onLoad();
    displayContent();
}

//1
function onLoad(){
    var temp = sessionStorage.getItem('previousWpm');
    if(temp!=null){
        bestWPM = parseInt(temp);
    }
    else{
        bestWPM = 0;
    }
}

//2
function displayContent(){
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

//3.1
webLoad();

//5
function endGame(){
    clearInterval(timerInterval);
    startBtn.disabled = false;
    timeLeft = 60;

    typingArea.disabled = true;
    typingArea.value = "";
    // typingArea.focus();
    typingArea.setAttribute('placeholder','The test will start when you begin typing...');
    displayContent();
}


//4.1

function startGame(){
    startBtn.disabled = true;
    currentText =testTexts[Math.floor(Math.random()*testTexts.length)];
    console.log(currentText);
    textDisplay.textContent = currentText;

    //4.3
    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder', 'Start writing Now...!');

 //4.2
    timerInterval= setInterval(function(){
        timeLeft--;
        if(timeLeft<=0){
            endGame();  //4.2;1
        }
        displayContent();
    },1000);
}

//6.1
function updateStatus(){
    var textContent = typingArea.value;

    const word = textContent.trim().split(/\s+/).filter(w => w.length > 0);
    console.log(word);
    const elapsedTime = (Date.now() - startTime)/1000/60;
    // console.log(elapsedTime);

    //6.2
    const wpm = elapsedTime > 0 ? Math.floor(word.length / elapsedTime): 0;
    wpmDisplay.textContent = wpm;

}

//5.1
function wordType(){
    
    if(startTime == null){
        startTime = Date.now();
    }
    console.log(startTime);
    //6
    updateStatus();
}

//4
startBtn.addEventListener('click', startGame);

//5
typingArea.addEventListener('input', wordType);