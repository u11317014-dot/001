let score = 0;
let gameRunning = false;
let timeLeft = 30;
let timerInterval;

const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

function getRandomMole() {
    return Math.floor(Math.random() * moles.length);
}

function showMole() {
    const randomMole = getRandomMole();
    const mole = moles[randomMole];
    mole.classList.add('show');
    setTimeout(() => {
        mole.classList.remove('show');
    }, 800);
}

function startGame() {
    score = 0;
    timeLeft = 30;
    gameRunning = true;
    scoreDisplay.textContent = 'Score: 0';
    startButton.disabled = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    // Show moles every 500ms
    const moleInterval = setInterval(() => {
        if (gameRunning) {
            showMole();
        } else {
            clearInterval(moleInterval);
        }
    }, 500);
}

function endGame() {
    gameRunning = false;
    clearInterval(timerInterval);
    startButton.disabled = false;
    alert('Game Over! Your score: ' + score);
}

moles.forEach((mole, index) => {
    mole.addEventListener('click', () => {
        if (mole.classList.contains('show') && gameRunning) {
            score++;
            scoreDisplay.textContent = 'Score: ' + score;
            mole.classList.remove('show');
        }
    });
});

startButton.addEventListener('click', startGame);