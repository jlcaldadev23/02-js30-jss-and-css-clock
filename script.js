const now = new Date();
const timeOffset = now.getTimezoneOffset();
console.log(timeOffset);

//UTC Time

//Japan Time

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
console.log(secondHand);

function setDate() {
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegree = (seconds / 60) * 360 - 90;
  const minutesDegree = (minutes / 60) * 360 - 90;
  const hoursDegree = (hours / 12) * 360 - 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  console.log(`${seconds}seconds`);
  console.log(`${minutes}minutes`);
  console.log(`${hours}hours`);
}

setInterval(setDate, 1000);
