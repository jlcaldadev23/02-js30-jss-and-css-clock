function setDate(countryClock, timeDiff) {
  const UTCSeconds = new Date().getUTCSeconds();
  const UTCMinutes = new Date().getUTCMinutes();
  const UTCHours = new Date().getUTCHours();

  const seconds = UTCSeconds;
  const minutes = UTCMinutes;
  const hours = UTCHours + timeDiff;

  const secondsDegree = (seconds / 60) * 360 - 90;
  const minutesDegree = (minutes / 60) * 360 - 90;
  const hoursDegree = (hours / 12) * 360 - 90;

  const secondHand = document.querySelector(`${countryClock} .second-hand`);
  const minuteHand = document.querySelector(`${countryClock} .minute-hand`);
  const hourHand = document.querySelector(`${countryClock} .hour-hand`);
  // console.log(hourHand);

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

function setClock(countryClock, timeDiff) {
  setInterval(function () {
    setDate(countryClock, timeDiff);
  }, 1000);
}
//Japan Time + 09:00
//New York - 05:00
//Dubai + 04:00

setClock(".clock-tokyo", 9);
setClock(".clock-new-york", -4);
setClock(".clock-dubai", 4);

// setInterval(function () {
//   setDate(".clock-tokyo", 9);
// }, 1000);

// setInterval(setDate(".clock-new-york", -5), 1000);
// setInterval(setDate(".clock-dubai", 4), 1000);
