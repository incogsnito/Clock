const clock = document.getElementById("time");

function currentTime() {
  const date = new Date();
  dateTwoFour = date.toTimeString();

  dateTwoFour = dateTwoFour.split(" ")[0];

  clock.textContent = dateTwoFour;
}

setInterval(currentTime, 1000);
