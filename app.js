const quizData = {
    "mongodb": {
        title: "MongoDB",
        questions: Array.from({ length: 30 }, (_, i) => ({
            q: `MongoDB Question ${i + 1}: Which of the following is true about MongoDB?`,
            options: ["It is a relational database", "It uses JSON-like documents", "It requires a fixed schema", "It does not support indexing"],
            answer: 1
        }))
    },
    "express": {
        title: "Express.js",
        questions: Array.from({ length: 30 }, (_, i) => ({
            q: `Express Question ${i + 1}: What is Express.js primarily used for?`,
            options: ["Building user interfaces", "Managing databases", "Building web applications and APIs", "Styling web pages"],
            answer: 2
        }))
    },
    "react": {
        title: "React",
        questions: Array.from({ length: 30 }, (_, i) => ({
            q: `React Question ${i + 1}: What is the Virtual DOM in React?`,
            options: ["A direct copy of the actual DOM", "A lightweight JavaScript representation of the DOM", "A database for React", "A CSS framework"],
            answer: 1
        }))
    },
    "nodejs": {
        title: "Node.js",
        questions: Array.from({ length: 30 }, (_, i) => ({
            q: `Node.js Question ${i + 1}: Which engine does Node.js use to execute JavaScript?`,
            options: ["SpiderMonkey", "Chakra", "V8", "JavaScriptCore"],
            answer: 2
        }))
    }
};

// State Variables
let currentUsername = "";
let currentCategory = "";
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let attemptedCount = 0;
let timerInterval;
let timeLeft = 10;
let totalTimeSpent = 0;

// DOM Elements
const views = {
    home: document.getElementById('home-view'),
    quiz: document.getElementById('quiz-view'),
    result: document.getElementById('result-view')
};

const homeElements = {
    usernameInput: document.getElementById('username-input'),
    enterBtn: document.getElementById('enter-btn'),
    nameError: document.getElementById('name-error'),
    categorySection: document.getElementById('category-section'),
    categoryBtns: document.querySelectorAll('.category-btn')
};

const quizElements = {
    categoryTitle: document.getElementById('quiz-category-title'),
    timerDisplay: document.getElementById('timer-display'),
    currentScore: document.getElementById('current-score'),
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    nextBtn: document.getElementById('next-btn')
};

const resultElements = {
    name: document.getElementById('result-name'),
    time: document.getElementById('result-time'),
    totalQ: document.getElementById('result-total-q'),
    attempted: document.getElementById('result-attempted'),
    correct: document.getElementById('result-correct'),
    wrong: document.getElementById('result-wrong'),
    percent: document.getElementById('result-percent'),
    startAgainBtn: document.getElementById('start-again-btn'),
    homeBtn: document.getElementById('home-btn')
};

// View Management
function showView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    Object.values(views).forEach(v => v.classList.add('hidden'));
    
    views[viewName].classList.remove('hidden');
    // small timeout to allow display:block to apply before opacity transition
    setTimeout(() => {
        views[viewName].classList.add('active');
    }, 10);
}

// Home Logic
homeElements.enterBtn.addEventListener('click', () => {
    const name = homeElements.usernameInput.value.trim();
    if (name.length < 2) {
        homeElements.nameError.textContent = "Please enter a valid name (min 2 characters).";
        return;
    }
    homeElements.nameError.textContent = "";
    currentUsername = name;
    homeElements.categorySection.classList.remove('hidden');
    // Scroll down to categories
    homeElements.categorySection.scrollIntoView({ behavior: 'smooth' });
});

homeElements.usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        homeElements.enterBtn.click();
    }
});

homeElements.categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!currentUsername) return;
        currentCategory = e.target.dataset.category;
        startQuiz();
    });
});

// Quiz Logic
function startQuiz() {
    questions = [...quizData[currentCategory].questions];
    quizElements.categoryTitle.textContent = quizData[currentCategory].title;
    
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    attemptedCount = 0;
    totalTimeSpent = 0;
    
    updateScore();
    showView('quiz');
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    quizElements.questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    quizElements.questionText.textContent = q.q;
    
    quizElements.optionsContainer.innerHTML = '';
    quizElements.nextBtn.disabled = true;
    quizElements.nextBtn.classList.add('disabled');
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => selectOption(index, btn);
        quizElements.optionsContainer.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    quizElements.timerDisplay.textContent = `${timeLeft}s`;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        totalTimeSpent++;
        quizElements.timerDisplay.textContent = `${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function handleTimeOut() {
    // Reveal correct answer if timeout
    const q = questions[currentQuestionIndex];
    const buttons = quizElements.optionsContainer.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => btn.disabled = true);
    buttons[q.answer].classList.add('correct');
    
    enableNextButton();
}

function selectOption(selectedIndex, btnElement) {
    clearInterval(timerInterval);
    const q = questions[currentQuestionIndex];
    const buttons = quizElements.optionsContainer.querySelectorAll('.option-btn');
    
    attemptedCount++;
    buttons.forEach(btn => btn.disabled = true);
    btnElement.classList.add('selected');
    
    if (selectedIndex === q.answer) {
        btnElement.classList.add('correct');
        score += 10;
        correctCount++;
        updateScore();
    } else {
        btnElement.classList.add('wrong');
        buttons[q.answer].classList.add('correct');
        wrongCount++;
    }
    
    enableNextButton();
}

function updateScore() {
    quizElements.currentScore.textContent = score;
}

function enableNextButton() {
    quizElements.nextBtn.disabled = false;
    quizElements.nextBtn.classList.remove('disabled');
}

quizElements.nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Result Logic
function showResult() {
    resultElements.name.textContent = currentUsername;
    resultElements.time.textContent = `${totalTimeSpent}s`;
    resultElements.totalQ.textContent = questions.length;
    resultElements.attempted.textContent = attemptedCount;
    resultElements.correct.textContent = correctCount;
    resultElements.wrong.textContent = wrongCount;
    
    const percentage = Math.round((correctCount / questions.length) * 100);
    resultElements.percent.textContent = `${percentage}%`;
    
    showView('result');
}

resultElements.startAgainBtn.addEventListener('click', () => {
    startQuiz();
});

resultElements.homeBtn.addEventListener('click', () => {
    homeElements.usernameInput.value = '';
    homeElements.categorySection.classList.add('hidden');
    currentUsername = "";
    showView('home');
});