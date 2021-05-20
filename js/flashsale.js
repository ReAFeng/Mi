var round = document.getElementById("round"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds");

function getTimes() {
  var time = new Date(), 
    Hours, Minutes, Seconds;
  var Hours = time.getHours(),
    Minutes = time.getMinutes(),
    Seconds = time.getSeconds();

  round.innerHTML = Hours < 10 ? "0" + Hours : Hours;
  minutes.innerHTML = Minutes < 10 ? "0" + Minutes : Minutes;
  seconds.innerHTML = Seconds < 10 ? "0" + Seconds : Seconds;
}

window.onload = function () {
  setInterval("getTimes()", 1000);
}