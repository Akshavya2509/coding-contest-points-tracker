// Scoring configuration (points for each option)
var optionScores = {
    option1: 3,
    option2: 4,
    option3: 4,
    option4: 7,
};

// Timer logic
let x = 5400; // 90 minutes
var seconds = x;
var timerInterval;
var autoSubmit = true; // Flag to indicate whether to auto-submit the form
var timerPaused = false;
let count = 0;
function updateTimer() {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    var displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    var displaySeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    document.getElementById('countdown').textContent = displayMinutes + ':' + displaySeconds;

    if (seconds > 0) {
        seconds--;
    } else {
        clearInterval(timerInterval);
        if (autoSubmit) {
            // Auto-submit the form when the timer reaches 0
            submitForm();
        }
    }
}

function startTimer() {
    autoSubmit = true; // Reset the auto-submit flag
    clearInterval(timerInterval); // Reset the timer if already running
    seconds = x; // Set the timer to the specified duration
    updateTimer(); // Display the initial time immediately
    timerInterval = setInterval(updateTimer, 1000);
}

// Form submission logic
function submitForm() {
    // Calculate and display scores
    var selectedOptions = document.querySelectorAll('input[type="checkbox"]:checked');
    var allOptions = document.querySelectorAll('input[type="checkbox"]');
    var score = 0;
    var totalScore = 0;
    allOptions.forEach(function (option) {
        var optionName = option.name;
        totalScore += optionScores[optionName] || 0;
    });
    selectedOptions.forEach(function (option) {
        var optionName = option.name;
        score += optionScores[optionName] || 0;
    });

    // Display the final score on the page
    document.getElementById('finalScore').textContent = 'Your final score: ' + score + '/' + totalScore;

    // Reset the timer
    clearInterval(timerInterval);
    seconds = x; // Reset the timer to the specified duration
    document.getElementById('countdown').textContent = formatTime(x);

    // Disable auto-submit when the form is submitted manually
    autoSubmit = false;
    // Additional logic for manual form submission if needed
    // document.getElementById('contestForm').submit();
}

// Function to format time as MM:SS
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    var displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    var displaySeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return displayMinutes + ':' + displaySeconds;
}

function pauseResumeTimer() {
    if (!timerPaused) {
        // If not paused, pause the timer
        clearInterval(timerInterval);
        timerPaused = true;
    } else {
        // If paused, resume the timer
        timerPaused = false;
        timerInterval = setInterval(updateTimer, 1000);
    }
}
