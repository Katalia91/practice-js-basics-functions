let counter = 0;
const runTimer = function () {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  counter++;
  if (counter >= 5) {
    clearInterval(timerId);
  }
  console.log(counter);
};
let timerId = setInterval(runTimer, 5000);
