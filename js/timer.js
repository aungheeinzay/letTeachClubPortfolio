"use strict";
let remaining = 1500,
  running = false,
  end = 0,
  interval;
const start = document.querySelector("#start"),
  display = document.querySelector("#time"),
  status = document.querySelector("#status");
function draw() {
  display.textContent =
    String(Math.floor(remaining / 60)).padStart(2, "0") +
    ":" +
    String(remaining % 60).padStart(2, "0");
}
function stop() {
  clearInterval(interval);
  running = false;
  start.textContent = "Start";
}
start.addEventListener("click", () => {
  if (running) {
    remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    stop();
    draw();
    status.textContent = "Paused.";
    return;
  }
  if (remaining === 0) remaining = 1500;
  running = true;
  end = Date.now() + remaining * 1000;
  start.textContent = "Pause";
  status.textContent = "Focus session in progress.";
  interval = setInterval(() => {
    remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    draw();
    if (remaining === 0) {
      stop();
      status.textContent = "Session complete. Take a short break.";
    }
  }, 250);
});
document.querySelector("#reset").addEventListener("click", () => {
  stop();
  remaining = 1500;
  draw();
  status.textContent = "Timer reset. Ready when you are.";
});
