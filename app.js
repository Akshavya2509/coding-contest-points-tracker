// Scoring configuration (points for each option)
var optionScores = {
    option1: 1,
    option2: 1,
    option3: 1,
    option4: 1,
};

// Timer logic
var seconds = 600; // 10 minutes
var timerInterval;
var autoSubmit = true; // Flag to indicate whether to auto-submit the form

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
    seconds = 600; // Reset the timer to 10 minutes
    updateTimer(); // Display the initial time immediately
    timerInterval = setInterval(updateTimer, 1000);
}

// Form submission logic
function submitForm() {
    // Calculate and display scores
    var selectedOptions = document.querySelectorAll('input[type="checkbox"]:checked');
    var score = 0;

    selectedOptions.forEach(function (option) {
        var optionName = option.name;
        score += optionScores[optionName] || 0;
    });

    // Display the final score on the page
    document.getElementById('finalScore').textContent = 'Your final score: ' + score;

    // Reset the timer
    clearInterval(timerInterval);
    seconds = 600; // Reset the timer to 10 minutes
    document.getElementById('countdown').textContent = '10:00';

    // Disable auto-submit when the form is submitted manually
    autoSubmit = false;
    // Additional logic for manual form submission if needed
    // document.getElementById('contestForm').submit();
}
