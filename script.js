// whack-a-mole game logic

const mole = document.querySelector('.mole');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    // Ensures we don't pop up a mole in the same hole
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function showMole() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) showMole();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    showMole();
    setTimeout(() => {
        timeUp = true;
    }, 10000); // Game lasts 10 seconds
}

function whack(e) {
    if (!e.isTrusted) return; // Authenticating user actions
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

// Adding event listeners for moles
moles.forEach(mole => mole.addEventListener('click', whack));

// Start the game
startGame();