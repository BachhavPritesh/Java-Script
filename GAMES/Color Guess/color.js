const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const colorBoxes = document.querySelectorAll('.color-box');
const newRoundBtn = document.querySelector('#newRoundBtn');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');

// Variables
let currentStreak = 0;
let bestStreak = 0;
let pickCorrectColor = "";
let colors = [];
let num = 6;
let gameOver = false;

// Initialize game
function initGame() {
    loadBestStreak();
    displayContent();
    setupGame();
}

// Load best streak from localStorage
function loadBestStreak() {
    const savedStreak = localStorage.getItem('bestStreak');
    if (savedStreak !== null) {
        bestStreak = parseInt(savedStreak);
    }
}

// Display current content
function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

// Random color generator
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate array of colors
function generateColors(count) {
    const colorArray = [];
    for (let i = 0; i < count; i++) {
        colorArray.push(generateRandomColor());
    }
    return colorArray;
}

// Set up the game
function setupGame() {
    gameOver = false;
    messageDisplay.textContent = "Pick the correct color!";
    messageDisplay.style.color = "white";
    
    colors = generateColors(num);
    pickCorrectColor = colors[Math.floor(Math.random() * colors.length)];
    
    colorDisplay.textContent = pickCorrectColor.toUpperCase();

    // Set colors for all boxes and show/hide based on difficulty
    colorBoxes.forEach((box, index) => {
        if (index < colors.length) {
            box.style.backgroundColor = colors[index];
            box.style.display = "block";
            box.style.opacity = "1";
        } else {
            box.style.display = "none";
        }
    });
}

// Handle color box click
function handleColorClick(event) {
    if (gameOver) return;
    
    const clickedBox = event.target;
    if (!clickedBox.classList.contains('color-box')) return;
    
    const clickedColor = clickedBox.style.backgroundColor;
    
    if (clickedColor === pickCorrectColor) {
        messageDisplay.textContent = "Correct! Well done!";
        messageDisplay.style.color = "#4CAF50";
        currentStreak++;
        
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('bestStreak', bestStreak.toString());
        }
        
        displayContent();
        gameOver = true;
        
        // Change all boxes to correct color with animation
        colorBoxes.forEach(box => {
            if (box.style.display !== "none") {
                box.style.backgroundColor = pickCorrectColor;
                box.style.opacity = "1";
            }
        });
        
    } else {
        // Wrong guess
        messageDisplay.textContent = "Wrong! Try again!";
        messageDisplay.style.color = "#f44336";
        clickedBox.style.opacity = "0.3";
        currentStreak = 0;
        displayContent();
    }
}

// Event Listeners
newRoundBtn.addEventListener('click', function() {
    setupGame();
});

easyBtn.addEventListener('click', function() {
    num = 3;
    easyBtn.classList.add('active');
    hardBtn.classList.remove('active');
    setupGame();
});

hardBtn.addEventListener('click', function() {
    num = 6;
    hardBtn.classList.add('active');
    easyBtn.classList.remove('active');
    setupGame();
});

resetStreakBtn.addEventListener('click', function() {
    bestStreak = 0;
    currentStreak = 0;
    localStorage.setItem('bestStreak', '0');
    displayContent();
});

// Add event listener for color boxes container
document.querySelector('.color-box-container').addEventListener('click', handleColorClick);

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGame);
} else {
    initGame();
}