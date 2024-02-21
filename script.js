const selectMenu = document.querySelectorAll("select");
const time = document.querySelector(".container h1");
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
  }, 1000);
};
currentTime();
