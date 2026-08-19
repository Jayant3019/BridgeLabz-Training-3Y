// AI Interviewer - JavaScript

const questions = [
    "Tell me about yourself and your technical background.",
    "What is the difference between HTML, CSS, and JavaScript?",
    "Explain the difference between frontend and backend development.",
    "What is the DOM and how does JavaScript interact with it?",
    "What is the difference between let, const, and var in JavaScript?",
    "Explain what an API is and how a frontend application uses one.",
    "What is the difference between == and === in JavaScript?",
    "How would you debug a JavaScript application that is not working correctly?"
];

let currentQuestion = 0;
let answers = [];
let timeLeft = 60;
let timerInterval = null;
let interviewStarted = false;
let recognition = null;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const questionNumberEl = document.getElementById("questionNumber");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const micBtn = document.getElementById("micBtn");

function startInterview() {
    currentQuestion = 0;
    answers = [];
    interviewStarted = true;

    document.getElementById("interview").scrollIntoView({ behavior: "smooth" });
    resultEl.innerHTML = "";
    answerEl.value = "";
    nextBtn.textContent = "Next Question →";

    showQuestion();
    startTimer();
}

function showQuestion() {
    questionEl.textContent = questions[currentQuestion];
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    progressEl.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    answerEl.value = answers[currentQuestion] || "";
    timeLeft = 60;
    updateTimer();

    nextBtn.textContent = currentQuestion === questions.length - 1
        ? "Finish Interview ✓"
        : "Next Question →";
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            saveAnswer();
            moveToNextQuestion();
        }
    }, 1000);
}

function updateTimer() {
    timerEl.textContent = `⏱️ ${timeLeft}`;
}

function saveAnswer() {
    answers[currentQuestion] = answerEl.value.trim();
}

function nextQuestion() {
    if (!interviewStarted) {
        startInterview();
        return;
    }

    saveAnswer();

    if (currentQuestion === questions.length - 1) {
        finishInterview();
        return;
    }

    moveToNextQuestion();
}

function moveToNextQuestion() {
    currentQuestion++;
    showQuestion();
    startTimer();
}

function finishInterview() {
    clearInterval(timerInterval);
    interviewStarted = false;

    const answered = answers.filter(answer => answer && answer.length > 0).length;
    const total = questions.length;
    const score = Math.round((answered / total) * 100);

    questionEl.textContent = "Interview Complete! 🎉";
    questionNumberEl.textContent = `${answered} of ${total} questions answered`;
    progressEl.style.width = "100%";
    timerEl.textContent = "⏱️ Done";
    answerEl.value = "";
    answerEl.disabled = true;
    nextBtn.disabled = true;
    micBtn.disabled = true;

    resultEl.innerHTML = `
        <div class="interview-result">
            <h3>Your Performance Score</h3>
            <div class="score">${score}%</div>
            <p>You answered ${answered} out of ${total} questions.</p>
            <button class="primary-btn" onclick="resetInterview()">Practice Again</button>
        </div>
    `;
}

function resetInterview() {
    answerEl.disabled = false;
    nextBtn.disabled = false;
    micBtn.disabled = false;
    resultEl.innerHTML = "";
    startInterview();
}

function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

function startVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice input is not supported in this browser. Please use Chrome or another supported browser.");
        return;
    }

    if (recognition) {
        recognition.stop();
        recognition = null;
        micBtn.textContent = "🎤 Speak Answer";
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    micBtn.textContent = "🔴 Listening...";

    recognition.onresult = event => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        answerEl.value = `${answerEl.value} ${transcript}`.trim();
    };

    recognition.onerror = event => {
        console.error("Speech recognition error:", event.error);
        micBtn.textContent = "🎤 Speak Answer";
    };

    recognition.onend = () => {
        recognition = null;
        micBtn.textContent = "🎤 Speak Answer";
    };

    recognition.start();
}

// Allow Ctrl + Enter to move to the next question.
answerEl.addEventListener("keydown", event => {
    if (event.ctrlKey && event.key === "Enter") {
        nextQuestion();
    }
});

// Make the page buttons work even if the HTML is opened directly from a file.
window.startInterview = startInterview;
window.scrollToFeatures = scrollToFeatures;
window.nextQuestion = nextQuestion;
window.startVoice = startVoice;
window.resetInterview = resetInterview;
