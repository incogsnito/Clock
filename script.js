const clock = document.getElementById("time");

function currentTime() {
  const date = new Date();
  dateTwoFour = date.toTimeString();

  dateTwoFour = dateTwoFour[0];
}

setInterval(currentTime, 1000);
