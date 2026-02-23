const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('#score');
const startBtn = document.querySelector('#start-btn');
let lastHole;
let score = 0;
let timeUp = false;

// Generate a random time for the mole to stay up
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Pick a random hole for the mole to pop out of
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) return randomHole(holes);
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(500, 1000); // Between 0.5 and 1 second
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 15000); // Game lasts 15 seconds
}

function whack(e) {
    if(!e.isTrusted) return; // Prevent cheating with fake clicks
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

const moles = document.querySelectorAll('.mole');
moles.forEach(mole => mole.addEventListener('click', whack));
startBtn.addEventListener('click', startGame);
