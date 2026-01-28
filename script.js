const clock = document.getElementById("time");

function currentTime() {}

setInterval(() => {
  const date = new Date();
  let dateString = date.toLocaleTimeString();

  clock.textContent = dateString;
});
