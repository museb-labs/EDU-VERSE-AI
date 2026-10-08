// ==========================================
// EDUVERSE AI - MAIN JAVASCRIPT
// ==========================================

// API Configuration
const API_BASE_URL = "http://localhost:5000/api";

// ==========================================
// DOM ELEMENTS
// ==========================================

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const studyPlanBtn = document.getElementById("studyPlanBtn");
const quizBtn = document.getElementById("quizBtn");
const flashcardBtn = document.getElementById("flashcardBtn");


// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function addMessage(message, sender = "ai") {
    if (!chatMessages) return;

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("chat-message");
    messageDiv.classList.add(sender);

    messageDiv.innerHTML = `
        <div class="message-content">
            ${escapeHTML(message)}
        </div>
    `;

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}


function showLoading() {
    if (!chatMessages) return;

    const loading = document.createElement("div");

    loading.id = "loadingMessage";
    loading.classList.add("chat-message", "ai");

    loading.innerHTML = `
        <div class="message-content">
            🤖 EduVerse AI is thinking...
        </div>
    `;

    chatMessages.appendChild(loading);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function removeLoading() {
    const loading = document.getElementById("loadingMessage");

    if (loading) {
        loading.remove();
    }
}


// ==========================================
// AI CHAT ASSISTANT
// ==========================================

if (chatForm) {

    chatForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const question = chatInput.value.trim();

        if (!question) {
            return;
        }

        // Show student message
        addMessage(question, "user");

        chatInput.value = "";

        showLoading();

        try {

            const response = await fetch(
                `${API_BASE_URL}/ai/chat`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        message: question
                    })
                }
            );

            if (!response.ok) {
                throw new Error("AI server error");
            }

            const data = await response.json();

            removeLoading();

            addMessage(
                data.reply || "Sorry, I couldn't generate a response.",
                "ai"
            );

        } catch (error) {

            removeLoading();

            console.error("AI Chat Error:", error);

            addMessage(
                "⚠️ Unable to connect to EduVerse AI. Make sure your backend server is running.",
                "ai"
            );
        }
    });
}


// ==========================================
// STUDY PLAN GENERATOR
// ==========================================

if (studyPlanBtn) {

    studyPlanBtn.addEventListener("click", async function () {

        const subject = prompt(
            "Which subject do you want a study plan for?"
        );

        if (!subject) return;

        const hours = prompt(
            "How many hours can you study per day?"
        );

        if (!hours) return;

        try {

            studyPlanBtn.disabled = true;

            studyPlanBtn.textContent = "Generating...";

            const response = await fetch(
                `${API_BASE_URL}/study-plan`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        subject: subject,
                        hoursPerDay: Number(hours)
                    })
                }
            );

            const data = await response.json();

            alert(
                data.plan ||
                "Study plan generated successfully!"
            );

        } catch (error) {

            console.error(error);

            alert(
                "Unable to generate study plan."
            );

        } finally {

            studyPlanBtn.disabled = false;

            studyPlanBtn.textContent = "Generate Study Plan";
        }
    });
}


// ==========================================
// QUIZ GENERATOR
// ==========================================

if (quizBtn) {

    quizBtn.addEventListener("click", async function () {

        const topic = prompt(
            "Enter the topic for your quiz:"
        );

        if (!topic) return;

        try {

            quizBtn.disabled = true;

            quizBtn.textContent = "Generating Quiz...";

            const response = await fetch(
                `${API_BASE_URL}/ai/quiz`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        topic: topic,
                        numberOfQuestions: 5
                    })
                }
            );

            const data = await response.json();

            console.log("Generated Quiz:", data);

            displayQuiz(data.quiz);

        } catch (error) {

            console.error(
                "Quiz generation error:",
                error
            );

            alert(
                "Unable to generate quiz."
            );

        } finally {

            quizBtn.disabled = false;

            quizBtn.textContent = "Generate Quiz";
        }
    });
}


// ==========================================
// DISPLAY QUIZ
// ==========================================

function displayQuiz(quiz) {

    if (!quiz) {
        alert("No quiz was generated.");
        return;
    }

    console.log(quiz);

    alert(
        "Quiz generated! Check the browser console for the questions."
    );
}


// ==========================================
// FLASHCARD GENERATOR
// ==========================================

if (flashcardBtn) {

    flashcardBtn.addEventListener(
        "click",
        async function () {

            const topic = prompt(
                "Enter a topic for flashcards:"
            );

            if (!topic) return;

            try {

                flashcardBtn.disabled = true;

                flashcardBtn.textContent =
                    "Creating Flashcards...";

                const response = await fetch(
                    `${API_BASE_URL}/ai/flashcards`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            topic: topic,
                            numberOfCards: 10
                        })
                    }
                );

                const data = await response.json();

                console.log(
                    "Flashcards:",
                    data
                );

                alert(
                    "Flashcards generated successfully!"
                );

            } catch (error) {

                console.error(
                    "Flashcard error:",
                    error
                );

                alert(
                    "Unable to generate flashcards."
                );

            } finally {

                flashcardBtn.disabled = false;

                flashcardBtn.textContent =
                    "Generate Flashcards";
            }
        }
    );
}


// ==========================================
// HOMEWORK / DOUBT SOLVER
// ==========================================

async function solveHomework(question) {

    if (!question) {
        return;
    }

    try {

        const response = await fetch(
            `${API_BASE_URL}/ai/homework`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: question
                })
            }
        );

        const data = await response.json();

        return data.answer;

    } catch (error) {

        console.error(
            "Homework Solver Error:",
            error
        );

        return "Unable to solve the question.";
    }
}


// ==========================================
// NOTES → FLASHCARDS
// ==========================================

async function convertNotesToFlashcards(notes) {

    if (!notes) {
        return [];
    }

    try {

        const response = await fetch(
            `${API_BASE_URL}/ai/notes-to-flashcards`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    notes: notes
                })
            }
        );

        const data = await response.json();

        return data.flashcards || [];

    } catch (error) {

        console.error(
            "Notes conversion error:",
            error
        );

        return [];
    }
}


// ==========================================
// SAVE USER PREFERENCES
// ==========================================

function saveUserPreference(key, value) {

    localStorage.setItem(
        `eduverse_${key}`,
        JSON.stringify(value)
    );
}


function getUserPreference(key) {

    const value = localStorage.getItem(
        `eduverse_${key}`
    );

    return value
        ? JSON.parse(value)
        : null;
}


// ==========================================
// DARK MODE
// ==========================================

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );

    const enabled =
        document.body.classList.contains(
            "dark-mode"
        );

    saveUserPreference(
        "darkMode",
        enabled
    );
}


// Load saved dark mode
const savedDarkMode =
    getUserPreference("darkMode");

if (savedDarkMode) {

    document.body.classList.add(
        "dark-mode"
    );
}


// ==========================================
// USER LOGOUT
// ==========================================

function logout() {

    localStorage.removeItem(
        "eduverse_token"
    );

    localStorage.removeItem(
        "eduverse_user"
    );

    window.location.href =
        "login.html";
}


// ==========================================
// INITIALIZE EDUVERSE AI
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🚀 EduVerse AI initialized"
        );

        console.log(
            "Backend:",
            API_BASE_URL
        );
    }
);const mongoose = require("mongoose");

async function main() {

    try {

        await mongoose.connect(
            "mongodb://127.0.0.1:27017/eduverse"
        );

        console.log("MongoDB connected successfully!");

    } catch (error) {

        console.log(
            "MongoDB connection failed:",
            error.message
        );
    }
}

main();const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "eduverse"
});

connection.connect((error) => {

    if (error) {
        console.log("MySQL connection failed:", error.message);
        return;
    }

    console.log("MySQL connected successfully!");
});

// Get students
connection.query(
    "SELECT * FROM students",
    (error, results) => {

        if (error) {
            console.log(error);
            return;
        }

        console.log("Students:");
        console.table(results);
    }
);