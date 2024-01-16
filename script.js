const watch = document.getElementById("stopwatch");
const focado = document.getElementById("focado");
const intervalo = document.getElementById("intervalo");

let minutes = 24;
let seconds = 60;
let interval;
let stored = minutes;

focado.addEventListener("click", function () {
  minutes = 24;
  stored = minutes;
  watch.innerHTML = "25:00";
  focado.classList.add("selected");
  intervalo.classList.remove("selected");
});

intervalo.addEventListener("click", function () {
  minutes = 4;
  stored = minutes;
  watch.innerHTML = "05:00";
  intervalo.classList.add("selected");
  focado.classList.remove("selected");
});

function start() {
  clock();
  interval = setInterval(clock, 1000);
}

const pause = () => {
  clearInterval(interval);
};

const stop = () => {
  clearInterval(interval);
  minutes = stored;
  seconds = 60;

  if (minutes === 24) {
    watch.innerHTML = "25:00";
  } else if (minutes === 4) {
    watch.innerHTML = "05:00";
  }
};

const digitZero = (digit) => {
  if (digit < 10) {
    return `0${digit}`;
  } else {
    return digit;
  }
};

function clock() {
  seconds--;
  if (seconds === 0) {
    minutes--;
    seconds = 60;
  }
  if (minutes === 0) {
    stop();
  }

  watch.innerHTML = digitZero(minutes) + ":" + digitZero(seconds);
}
