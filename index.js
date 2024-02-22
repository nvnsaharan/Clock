const circle5 = document.getElementById("outer-ticks")
let outerticks = ""
for (let index = 0; index < 60; index++) {
  if (index % 5 == 0) {
    outerticks += `<div class="long-tick" style="--n:${index}"></div>`;
  } else {
    outerticks += `<div style="--n:${index}"></div>`;
  }
}

circle5.innerHTML = outerticks

const circle4 = document.querySelector(".circle4 .circle-text")
let circle4_text = "";
for (let index = 0; index < 12; index++) {
  circle4_text += `<span style="--n:${index+1}"><div style="--n:${index+1}" id="seconds">${index*5}</div></span>`
}
circle4.innerHTML = circle4_text;

const circle2 = document.querySelector(".circle2 .circle-text")
let circle2_text = "";
for (let index = 0; index < 12; index++) {
  circle2_text += `<span style="--n:${index+1}">${index*5}</span>`
}
circle2.innerHTML = circle2_text;

const circle3 = document.getElementById("inner-ticks")
let innerticks = ""
for (let index = 0; index < 60; index++) {
  if (index % 5 == 0) {
    innerticks += `<div class="long-tick" style="--n:${index}"></div>`;
  } else {
    innerticks += `<div style="--n:${index}"></div>`;
  }
}

circle3.innerHTML = innerticks

const date = new Date();
document.getElementById("hours").innerText = date.getHours();
document.getElementById("minutes").innerText = date.getMinutes();

const c2 = document.querySelector(".circle2")
const c3 = document.querySelector(".circle3")
c2.style.transform = `rotate(calc(${date.getMinutes()*(-6)+90}deg))`
c3.style.transform = `rotate(calc(${date.getMinutes()*(-6)+90}deg))`

const c4 = document.querySelector(".circle4")
const c5 = document.querySelector(".circle5")
c4.style.transform = `rotate(calc(${date.getSeconds()*(-6)+90}deg))`
c5.style.transform = `rotate(calc(${date.getSeconds()*(-6)+90}deg))`

let sec = date.getSeconds();
let min = date.getMinutes();
let hrs = date.getHours();
let sec_angle = date.getSeconds()*(-6)+90;
let min_angle = date.getMinutes()*(-6)+90

setInterval(() => {
  sec += 1;
  sec_angle -= 6;
  c4.style.transform = `rotate(calc(${sec_angle}deg))`;
  c5.style.transform = `rotate(calc(${sec_angle}deg))`;
  if(sec == 60){
    min += 1
    min_angle -= 6;
    c2.style.transform = `rotate(calc(${min_angle}deg))`
    c3.style.transform = `rotate(calc(${min_angle}deg))`

    sec = 0
    if (min == 60){
      hrs += 1
      if (hrs > 12){
        hrs = hrs%12
      }
      document.getElementById("hours").innerText = hrs;
      min = 0
    }
    document.getElementById("minutes").innerText = min;
  }
}, 1000);