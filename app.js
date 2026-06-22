const quizData = {
    "pipes": {
        title: "Pipes and Cisterns",
        questions: [
            { q: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is:", options: ["10 mins", "12 mins", "15 mins", "25 mins"], answer: 1 },
            { q: "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?", options: ["3 hrs 15 mins", "3 hrs 45 mins", "4 hrs", "4 hrs 15 mins"], answer: 1 },
            { q: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2.5 hours to fill the tank. The leak can drain all the water of the tank in:", options: ["4 hrs", "8 hrs", "10 hrs", "14 hrs"], answer: 2 },
            { q: "Two pipes can fill a cistern in 14 hours and 16 hours respectively. The pipes are opened simultaneously and it is found that due to leakage in the bottom, it took 32 minutes more to fill the cistern. When the cistern is full, in what time will the leak empty it?", options: ["114 hrs", "112 hrs", "100 hrs", "80 hrs"], answer: 1 },
            { q: "Pipe A can fill a tank in 5 hours, pipe B in 10 hours and pipe C in 30 hours. If all the pipes are open, in how many hours will the tank be filled?", options: ["2 hrs", "2.5 hrs", "3 hrs", "3.5 hrs"], answer: 2 },
            { q: "A cistern can be filled by a tap in 4 hours while it can be emptied by another tap in 9 hours. If both the taps are opened simultaneously, then after how much time will the cistern get filled?", options: ["4.5 hrs", "5 hrs", "6.5 hrs", "7.2 hrs"], answer: 3 },
            { q: "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is:", options: ["10", "12", "14", "16"], answer: 2 },
            { q: "Water is flowing at the rate of 3 km/hr through a circular pipe of 20 cm internal diameter into a circular cistern of diameter 10 m and depth 2 m. In how much time will the cistern be filled?", options: ["1 hr", "1 hr 40 mins", "1 hr 20 mins", "2 hrs"], answer: 1 },
            { q: "A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?", options: ["15 min", "20 min", "27.5 min", "30 min"], answer: 3 },
            { q: "Pipe A can fill a tank in 16 minutes and pipe B in 24 minutes. If both the pipes are opened simultaneously, after how much time should pipe B be closed so that the tank is filled in 12 minutes?", options: ["4 mins", "6 mins", "8 mins", "9 mins"], answer: 1 }
        ]
    },
    "probability": {
        title: "Probability",
        questions: [
            { q: "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?", options: ["1/2", "2/5", "8/15", "9/20"], answer: 3 },
            { q: "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?", options: ["10/21", "11/21", "2/7", "5/7"], answer: 0 },
            { q: "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?", options: ["1/10", "2/5", "2/7", "5/7"], answer: 2 },
            { q: "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?", options: ["1/15", "25/57", "35/256", "1/221"], answer: 3 },
            { q: "Two dice are tossed. The probability that the total score is a prime number is:", options: ["1/6", "5/12", "1/2", "7/9"], answer: 1 },
            { q: "A card is drawn from a pack of 52 cards. The probability of getting a queen of club or a king of heart is:", options: ["1/13", "2/13", "1/26", "1/52"], answer: 2 },
            { q: "A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red, is:", options: ["1/22", "3/22", "2/91", "2/77"], answer: 2 },
            { q: "Two cards are drawn together from a pack of 52 cards. The probability that one is a spade and one is a heart, is:", options: ["3/20", "29/34", "47/100", "13/102"], answer: 3 },
            { q: "One card is drawn at random from a pack of 52 cards. What is the probability that the card drawn is a face card (Jack, Queen and King only)?", options: ["1/13", "3/13", "1/4", "9/52"], answer: 1 },
            { q: "A bag contains 6 black and 8 white balls. One ball is drawn at random. What is the probability that the ball drawn is white?", options: ["3/4", "4/7", "1/8", "3/7"], answer: 1 }
        ]
    },
    "age": {
        title: "Problems on Age",
        questions: [
            { q: "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?", options: ["2 times", "2.5 times", "2.75 times", "3 times"], answer: 0 },
            { q: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?", options: ["4 years", "8 years", "10 years", "None of these"], answer: 0 },
            { q: "A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is 38 years now, the son's age five years back was:", options: ["14 years", "19 years", "33 years", "38 years"], answer: 0 },
            { q: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?", options: ["7", "8", "9", "10"], answer: 3 },
            { q: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?", options: ["24", "27", "40", "Cannot be determined"], answer: 0 },
            { q: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?", options: ["16 years", "18 years", "20 years", "Cannot be determined"], answer: 0 },
            { q: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:", options: ["12 years", "14 years", "18 years", "20 years"], answer: 3 },
            { q: "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present?", options: ["12 years", "15 years", "19 and half", "21 years"], answer: 1 },
            { q: "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?", options: ["16 years", "18 years", "28 years", "24.5 years"], answer: 3 },
            { q: "The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages (in years).", options: ["8, 20, 28", "16, 28, 36", "20, 35, 45", "None of these"], answer: 1 }
        ]
    },
    "profit": {
        title: "Profit and Loss",
        questions: [
            { q: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:", options: ["15", "16", "18", "25"], answer: 1 },
            { q: "If selling price is doubled, the profit triples. Find the profit percent.", options: ["66.66%", "100%", "105.33%", "120%"], answer: 1 },
            { q: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?", options: ["30%", "70%", "100%", "250%"], answer: 1 },
            { q: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?", options: ["3", "4", "5", "6"], answer: 2 },
            { q: "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?", options: ["Rs. 2000", "Rs. 2200", "Rs. 2400", "Data inadequate"], answer: 0 },
            { q: "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?", options: ["Rs. 18.20", "Rs. 70", "Rs. 72", "Rs. 88.25"], answer: 2 },
            { q: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?", options: ["Rs. 1090", "Rs. 1160", "Rs. 1190", "Rs. 1202"], answer: 2 },
            { q: "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?", options: ["3.5%", "4.5%", "5.6%", "6.5%"], answer: 2 },
            { q: "Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:", options: ["30%", "33.33%", "35%", "44%"], answer: 3 },
            { q: "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:", options: ["Rs. 45", "Rs. 50", "Rs. 55", "Rs. 60"], answer: 3 }
        ]
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