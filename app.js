// Timer logic
x = 10;
var seconds = x; // 10 minutes
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
            document.getElementById('contestForm').submit();
        }
    }
}

function startTimer() {
    autoSubmit = true; // Reset the auto-submit flag
    clearInterval(timerInterval); // Reset the timer if already running
    seconds = x; // Reset the timer to 10 minutes
    updateTimer(); // Display the initial time immediately
    timerInterval = setInterval(updateTimer, 1000);
}

// Form submission logic
function submitForm() {
    // Calculate and display scores (example)
    var selectedOptions = document.querySelectorAll('input[type="checkbox"]:checked');
    var score = selectedOptions.length; // Example: 1 point for each selected option
    alert('Your score: ' + score + ' out of ' + selectedOptions.length);

    // Disable auto-submit when the form is submitted manually
    autoSubmit = false;
    // Additional logic for manual form submission if needed
    // document.getElementById('contestForm').submit();
}
