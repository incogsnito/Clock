const clock = document.getElementById("time");

let date;

function currentTimeCivil() {
  setInterval(() => {
    date = new Date();
    let dateString = date.toLocaleTimeString();

    clock.textContent = dateString;
  });
}
function currentTimeMilitary() {
  setInterval(() => {
    date = new Date();

    let ampm;

    if (date.getHours >= 12) {
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

currentTimeMilitary();
