const daysEI = document.getElementById("days");
const hoursEI = document.getElementById("hours");
const minsEI = document.getElementById("mins");
const secondsEI = document.getElementById("seconds");

const newYears = "1 Jan 2023";

// Function that generates the time in seconds left for year to be over
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalseconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  daysEI.innerHTML = days;
  hoursEI.innerHTML = formatTime(hours);
  minsEI.innerHTML = formatTime(mins);
  secondsEI.innerHTML = formatTime(seconds);

  console.log(days, hours, mins, seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial Call
countdown();

// Callback function to generate new digits
setInterval(countdown, 1000);
