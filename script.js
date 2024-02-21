const selectMenu = document.querySelectorAll("select");
const time = document.querySelector(".container h1");
const alarmBtn = document.querySelector(".container button");
const content = document.querySelector(".content");

const rington = new Audio("./Files/Good Morning Alarm.mp3");

let alarmTime;
let setAlarm = false;

for (let i = 0; i <= 23; i++) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 0; i <= 59; i++) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

const currentTime = () => {
  setInterval(() => {
    let cTime = new Date();
    let h = cTime.getHours();
    let m = cTime.getMinutes();
    let s = cTime.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    time.innerHTML = `${h}:${m}:${s}`;

    if (alarmTime == `${h}:${m}`) {
      rington.play();
      rington.loop = true;
    }
  }, 1000);
};
currentTime();

alarmBtn.addEventListener("click", () => {
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
  if (alarmTime.includes("hour") || alarmTime.includes("minute")) {
    return alert("the time is not correct");
  }
  setAlarm = !setAlarm;
  disableBtn(setAlarm);
  rington.pause();
});

const disableBtn = () => {
  if (setAlarm) {
    content.classList.add("disable");
    alarmBtn.innerHTML = "clear alarm";
  } else {
    alarmTime = "";
    content.classList.remove("disable");
    alarmBtn.innerHTML = "set alarm";
  }
};
