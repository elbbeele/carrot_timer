let totalSeconds = 0;
let interval;

function startTimer() {
    if (interval) return; // Prevent multiple intervals
  
    const input = document.getElementById('minutesInput').value;
    const minutes = parseInt(input, 10);
  
    if (isNaN(minutes) || minutes <= 0) {
      alert('not valid carrot time!');
      return;
    }
  
    totalSeconds = minutes * 60;
    updateDisplay();
    isPaused = false;
  
    interval = setInterval(runTimer, 1000);
}

function runTimer() {
    if (!isPaused && totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
    }

    if (totalSeconds <= 0) {
        clearInterval(interval);
        interval = null;
        alert("carrot is going to sleep.");
    }
}

function pauseTimer() {
    if(!interval) {
        alert("carrot timer didn't start yet!");
        return;
    }
    isPaused = true;
}

function resumeTimer() {
    if(!interval) {
        alert("carrot timer didn't start yet!");
        return;
    }
    if (interval && isPaused){
        isPaused = false;
    } else if (!interval && totalSeconds > 0) {
        interval = setInterval(runTimer, 1000);
        isPaused = false;
    }
}


function resetTimer() {
  clearInterval(interval);
  interval = null;
  isPaused = false;
  totalSeconds = 0;
  document.getElementById('timer').textContent = "00:00";
  document.getElementById('minutesInput').value = '';
}

function updateDisplay() {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${secs}`;
}
