function attachEventsListeners() {
  let daysInput = document.getElementById("days");
  let hoursInput = document.getElementById("hours");
  let minutesInput = document.getElementById("minutes");
  let secondsInput = document.getElementById("seconds");
  let daysBtn = document.getElementById("daysBtn");
  let hoursBtn = document.getElementById("hoursBtn");
  let minutesBtn = document.getElementById("minutesBtn");
  let secondsBtn = document.getElementById("secondsBtn");

  daysBtn.addEventListener("click", function () {
    let days = Number(daysInput.value);
    hoursInput.value = days * 24;
    minutesInput.value = days * 1440;
    secondsInput.value = days * 86400;
  });
  hoursBtn.addEventListener("click", function () {
    let hours = Number(hoursInput.value);
    daysInput.value = hours / 24;
    minutesInput.value = hours * 60;
    secondsInput.value = hours * 3600;
  });
  minutesBtn.addEventListener("click", function () {
    let minutes = Number(minutesInput.value);
    daysInput.value = minutes / 1440;
    hoursInput.value = minutes / 60;
    secondsInput.value = minutes * 60;
  });
  secondsBtn.addEventListener("click", function () {
    let seconds = Number(secondsInput.value);
    daysInput.value = seconds / 86400;
    hoursInput.value = seconds / 3600;
    minutesInput.value = seconds / 60;
  });
}
