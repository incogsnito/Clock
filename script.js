const clock = document.getElementById("time");
const format = document.getElementById("format-switch");

let date;

let fetchCivil = true;

let fetchMilitary = false;

let miitary;

let civil;

function currentTimeCivil() {
  if (!fetchCivil) return;

  civil = setInterval(() => {
    date = new Date();
    dateString = date.toLocaleTimeString();
    clock.textContent = dateString;
  });
}

function currentTimeMilitary() {
  if (!fetchMilitary) return;

  military = setInterval(() => {
    date = new Date();

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
  });
}

format.addEventListener("click", () => {
  if (fetchCivil) {
    fetchCivil = false;
    fetchMilitary = true;
    clearInterval(civil);
    currentTimeMilitary();
  } else if (fetchMilitary) {
    fetchMilitary = false;
    fetchCivil = true;
    clearInterval(military);
    currentTimeCivil();
  }
});

currentTimeMilitary();
