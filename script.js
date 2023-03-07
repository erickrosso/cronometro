const minutoEl = document.getElementById("minuto");
const secEl = document.getElementById("seconds");
const milisecondsEl = document.getElementById("miliseconds");

const inciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const continuar = document.getElementById("continuar");
const resetar = document.getElementById("resetar");

let minuto = 0;
let sec = 0;
let miliseconds = 0;
let interval;
let pause = false;

function startTime() {
  interval = setInterval(() => {
    if (pause == false) {
      miliseconds += 10;

      if (miliseconds === 1000) {
        sec++;
        miliseconds = 0;
      }

      if (sec === 60) {
        minuto++;
        sec = 0;
      }
      milisecondsEl.textContent = miliseconds;
      secEl.textContent = sec;
      minutoEl.textContent = minuto;
    }
    if (parseInt(minutoEl.textContent) < 10) {
      minutoEl.textContent = "0" + minuto;
    }
    if (parseInt(secEl.textContent) < 10) {
      secEl.textContent = "0" + sec;
    }
    if (parseInt(milisecondsEl.textContent) < 99) {
      milisecondsEl.textContent = "0" + miliseconds;
    }
  }, 10);
  pausar.style.display = "inline-block";
  resetar.style.display = "inline-block";
  inciar.style.display = "none";
}

function pausarTimer() {
  continuar.style.display = "inline-block";
  pausar.style.display = "none";
  return (pause = true);
}

function continuarTimer() {
  continuar.style.display = "none";
  pausar.style.display = "inline-block";
  return (pause = false);
}

function reset() {
  pausar.style.display = "none";
  resetar.style.display = "none";
  continuar.style.display = "none";
  inciar.style.display = "inline-block";

  clearInterval(interval);

  minuto = 0;
  sec = 0;
  miliseconds = 0;

  milisecondsEl.textContent = "00" + miliseconds;
  secEl.textContent = "0" + sec;
  minutoEl.textContent = "0" + minuto;
}

inciar.addEventListener("click", startTime);
pausar.addEventListener("click", pausarTimer);
continuar.addEventListener("click", continuarTimer);
resetar.addEventListener("click", reset);
