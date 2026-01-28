const clock = document.getElementById("time");
const format = document.getElementById("format-switch");

const day = document.getElementById("date");

let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();

let fetchCivil = true;

let fetchMilitary = false;

let miitary;

let civil = true;

function currentTimeCivil() {
  if (!fetchCivil) return;

  civil = setInterval(() => {
    dateString = date.toLocaleTimeString();
    clock.textContent = dateString;
  }, 100);
}

function currentTimeMilitary() {
  if (!fetchMilitary) return;

  military = setInterval(() => {
    let ampm;

    if (date.getHours() >= 12) {
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    dateTimeMilitary =
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      " " +
      ampm;
    clock.textContent = dateTimeMilitary;
  }, 100);
}

function switchTime() {
  if (fetchCivil) {
    fetchCivil = false;
    fetchMilitary = true;
    clearInterval(civil);
    currentTimeMilitary();
    format.innerText = "12HR";
  } else if (fetchMilitary) {
    fetchMilitary = false;
    fetchCivil = true;
    clearInterval(military);
    currentTimeCivil();
    format.innerText = "24HR";
  }
}

function fetchDay() {
  day.textContent = dayList[date.getDay()];
}

format.addEventListener("click", switchTime);

currentTimeCivil();
fetchDay();
