import FlipClock from 'flipclock';
import timer from './timer.js';
import './style.scss';
import './flipclock.css';

const countDownDate = new Date("Apr 19, 2018 01:29:00").getTime();
const now = new Date().getTime();
const distance = countDownDate - now;
const seconds = Math.floor(distance / 1000);
const gmg = document.querySelector(".js-gamooga");
const cta = document.getElementById("btn1");
var clock;
// gmg.onclick = function(e) {
//   e.stopPropagation();
// }
cta.onclick = function(e) {
  window.location.href = "https://www.caratlane.com/jewellery/upto+25+percent+off+on+making.html?CLNI-9";
}

!function() {
  FlipClock ?
  (clock = $('#timer').FlipClock(seconds, {
    countdown: true
  }), clock.setCountdown(true)) : timer();
}();
