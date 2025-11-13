
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const time30 = document.querySelector('#time-30');
const time60 = document.querySelector('#time-60');
const time90 = document.querySelector('#time-90');

// Test texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state
let currentText = '';
let selectedTime = 60;
let timeLeft = selectedTime;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

function webLoad() {
    onLoad();
    displayContent();
}

function onLoad() {
    var temp = sessionStorage.getItem('previousWpm');
    if (temp != null) {
        bestWPM = parseInt(temp);
    } else {
        bestWPM = 0;
    }
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

webLoad();

function setTime(seconds){
    selectedTime = seconds;
    timeLeft = seconds;
    timerDisplay.textContent = timeLeft;
    
    // Reset if test is not active
    if (!isTestActive) {
        resetGame();
    }
}

function endGame() {
    clearInterval(timerInterval);
    isTestActive = false;
    startBtn.disabled = false;
    
    // Calculate final WPM and accuracy
    const textContent = typingArea.value;
    const words = textContent.trim().split(/\s+/).filter(w => w.length > 0);
    const elapsedTime = (selectedTime - timeLeft) / 60; // Time in minutes
    const wpm = elapsedTime > 0 ? Math.floor(words.length / elapsedTime) : 0;
    
    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < Math.min(currentText.length, textContent.length); i++) {
        if (currentText[i] === textContent[i]) {
            correctChars++;
        }
    }
    const accuracy = textContent.length > 0 ? Math.floor((correctChars / textContent.length) * 100) : 0;
    
    // Update displays
    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = `${accuracy}%`;
    
    // Update best WPM if current WPM is higher
    if (wpm > bestWPM) {
        bestWPM = wpm;
        sessionStorage.setItem('previousWpm', bestWPM);
        bestWPMDisplay.textContent = bestWPM;
    }
    
    typingArea.disabled = true;
    typingArea.setAttribute('placeholder', 'Test finished! Click Start to try again.');
}

function startGame() {
    if (isTestActive) return;
    
    clearInterval(timerInterval);
    timeLeft = selectedTime;
    timerDisplay.textContent = timeLeft;

    startBtn.disabled = true;
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;

    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder', 'Start writing Now...!');
    
    isTestActive = true;
    startTime = Date.now();
    
    // Reset WPM and accuracy displays
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '0%';

    timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function updateStatus() {
    if (!isTestActive) return;
    
    const textContent = typingArea.value;
    const words = textContent.trim().split(/\s+/).filter(w => w.length > 0);
    
    // Calculate WPM
    const elapsedTime = (Date.now() - startTime) / 1000 / 60; // Time in minutes
    const wpm = elapsedTime > 0 ? Math.floor(words.length / elapsedTime) : 0;
    wpmDisplay.textContent = wpm;

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < Math.min(currentText.length, textContent.length); i++) {
        if (currentText[i] === textContent[i]) {
            correctChars++;
        }
    }
    
    const accuracy = textContent.length > 0 ? Math.floor((correctChars / textContent.length) * 100) : 0;
    accuracyDisplay.textContent = `${accuracy}%`;
}

function highLights() {
    if (!currentText) return;
    
    const textContent = typingArea.value;
    let highlightsText = '';
    
    for (let i = 0; i < currentText.length; i++) {
        if (i < textContent.length) {
            if (currentText[i] === textContent[i]) {
                highlightsText += `<span class="correct">${currentText[i]}</span>`;
            } else {
                highlightsText += `<span class="incorrect">${currentText[i]}</span>`;
            }
        } else {
            highlightsText += currentText[i];
        }
    }
    textDisplay.innerHTML = highlightsText;
}

function wordType() {
    if (!isTestActive) {
        startGame();
        return;
    }
    
    updateStatus();
    highLights();
    
    // Check if user has completed the text
    if (typingArea.value === currentText) {
        endGame();
    }
}

function resetGame() {
    clearInterval(timerInterval);
    isTestActive = false;
    startTime = null;
    timeLeft = selectedTime;
    timerDisplay.textContent = timeLeft;
    startBtn.disabled = false;
    typingArea.disabled = true;
    typingArea.value = "";
    typingArea.setAttribute('placeholder', 'Click "Start Test" or begin typing to start the test.');
    textDisplay.textContent = 'Click "Start Test" or begin typing to start the test.';
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '0%';
}

// Event listeners - FIXED: Use arrow functions to prevent immediate execution
startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', wordType);
time30.addEventListener('click', () => setTime(30));
time60.addEventListener('click', () => setTime(60));
time90.addEventListener('click', () => setTime(90));

// Add reset button functionality
if (resetBtn) {
    resetBtn.addEventListener('click', resetGame);
}

// // DOM Elements
// const textDisplay = document.querySelector('#textDisplay');
// const typingArea = document.querySelector('#typingArea');
// const timerDisplay = document.querySelector('#timer');
// const wpmDisplay = document.querySelector('#wpm');
// const accuracyDisplay = document.querySelector('#accuracy');
// const bestWPMDisplay = document.querySelector('#bestWPM');
// const startBtn = document.querySelector('#startBtn');
// const resetBtn = document.querySelector('#resetBtn');

// // Test texts
// const testTexts = [
// "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
// "Technology has revolutionized the way we communicate and work in the modern digital era.",
// "Typing speed is an essential skill for anyone working with computers in today's workplace."
// ];
// // Game state
// let currentText = '';
// let timeLeft = 60;
// let timerInterval = null;
// let startTime = null;
// let isTestActive = false;
// let bestWPM = 0;

// //3
// function webLoad(){
//     onLoad();
//     displayContent();
// }

// //1
// function onLoad(){
//     var temp = sessionStorage.getItem('previousWpm');
//     if(temp!=null){
//         bestWPM = parseInt(temp);
//     }
//     else{
//         bestWPM = 0;
//     }
// }

// //2
// function displayContent(){
//     timerDisplay.textContent = timeLeft;
//     bestWPMDisplay.textContent = bestWPM;
// }

// //3.1
// webLoad();

// //5
// function endGame(){
//     clearInterval(timerInterval);
//     startBtn.disabled = false;
//     timeLeft = 60;

//     typingArea.disabled = true;
//     typingArea.value = "";
//     // typingArea.focus();
//     typingArea.setAttribute('placeholder','The test will start when you begin typing...');
//     displayContent();
// }


// //4.1

// function startGame(){
//     startBtn.disabled = true;
//     currentText =testTexts[Math.floor(Math.random()*testTexts.length)];
//     console.log(currentText);
//     textDisplay.textContent = currentText;

//     //4.3
//     typingArea.disabled = false;
//     typingArea.value = "";
//     typingArea.focus();
//     typingArea.setAttribute('placeholder', 'Start writing Now...!');

//  //4.2
//     timerInterval= setInterval(function(){
//         timeLeft--;
//         if(timeLeft<=0){
//             endGame();  //4.2;1
//         }
//         displayContent();
//     },1000);
// }

// //6.1
// function updateStatus(){
//     var textContent = typingArea.value;

//     const word = textContent.trim().split(/\s+/).filter(w => w.length > 0);
//     console.log(word);
//     const elapsedTime = (Date.now() - startTime)/1000/60;
//     // console.log(elapsedTime);

//     //6.2
//     const wpm = elapsedTime > 0 ? Math.floor(word.length / elapsedTime): 0;
//     wpmDisplay.textContent = wpm;

// }

// //5.1
// function wordType(){
    
//     if(startTime == null){
//         startTime = Date.now();
//     }
//     console.log(startTime);
//     //6
//     updateStatus();
// }

// //4
// startBtn.addEventListener('click', startGame);

// //5
// typingArea.addEventListener('input', wordType);