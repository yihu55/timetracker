const hours = document.querySelectorAll(".hours");
const previous = document.querySelectorAll(".previous");

function getDaily() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        previous[i].innerHTML = data[i].timeframes.daily.previous + "hrs";
      });
    });
}
function getWeekly() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        previous[i].innerHTML = data[i].timeframes.weekly.previous + "hrs";
      });
    });
}
function getMonthly() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        previous[i].innerHTML = data[i].timeframes.monthly.previous + "hrs";
      });
    });
}
const dailybutton = document.querySelector(".daily");
dailybutton.addEventListener("click", getDaily);

const weeklybutton = document.querySelector(".weekly");
weeklybutton.addEventListener("click", getWeekly);

const monthbutton = document.querySelector(".monthly");
monthbutton.addEventListener("click", getMonthly);
