let isRunning = false;
let timer;
let time = 25 * 60; // 25 minutes

document.getElementById('start').addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timer);
        this.textContent = 'Start';
    } else {
        timer = setInterval(startTimer, 1000);
        this.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    time = 25 * 60;
    document.getElementById('timer').textContent = "25:00";
    document.getElementById('start').textContent = 'Start';
    isRunning = false;
});

function startTimer() {
    const minutes = parseInt(time / 60, 10);
    const seconds = parseInt(time % 60, 10);

    document.getElementById('timer').textContent = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

    if (--time < 0) {
        clearInterval(timer);
        alert('Time for a break!');
        time = 25 * 60; // reset time
    }
}
