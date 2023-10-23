// Timer logic
var seconds = 600; // 10 minutes
var timerInterval;

function updateTimer() {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    document.getElementById('countdown').innerHTML = minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
    if (seconds > 0) {
        seconds--;
    } else {
        // Redirect to submission page when the timer reaches 0
        document.getElementById('contestForm').submit();
    }
}

function startTimer() {
    clearInterval(timerInterval); // Reset the timer if already running
    seconds = 600; // Reset the timer to 10 minutes
    timerInterval = setInterval(updateTimer, 1000);
}

// Form submission logic
function submitForm() {
    // Calculate and display scores (example)
    var selectedOptions = document.querySelectorAll('input[type="checkbox"]:checked');
    var score = selectedOptions.length; // Example: 1 point for each selected option
    alert('Your score: ' + score + ' out of ' + selectedOptions.length);
}
