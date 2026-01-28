const clock = document.getElementById("time");

function currentTime() {
  const date = new Date();
  let dateString = date.toTimeString();

  dateTwoFour = dateString.split(" ")[0];

  clock.textContent = dateTwoFour;
}

setInterval(currentTime);
