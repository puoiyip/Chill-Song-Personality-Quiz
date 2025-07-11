var quesCount = 0;
//outcomes
var outcomes = {
  waveToEarth: 0,
  grentperez: 0,
  laufey: 0,
  yungKai: 0,
  keshi: 0,
}
//answers
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

function score(obj, person) {
  obj[person] += 1;
  console.log("score = " +obj[person]);
  return obj[person];
}

q1a1.addEventListener("click", score(outcomes, "waveToEarth"));
q1a2.addEventListener("click", score(outcomes, "keshi"));
q1a2.addEventListener("click", score(outcomes, "grentperez"));
q1a3.addEventListener("click", score(outcomes, "yungKai"));
q1a4.addEventListener("click", score(outcomes, "laufey"));

q2a1.addEventListener("click", score(outcomes, "grentperez"));
q2a2.addEventListener("click", score(outcomes, "yungKai"));
q2a2.addEventListener("click", score(outcomes, "waveToEarth"));
q2a3.addEventListener("click", score(outcomes, "laufey"));
q2a4.addEventListener("click", score(outcomes, "keshi"));

q3a1.addEventListener("click", score(outcomes, "laufey"));
q3a2.addEventListener("click", score(outcomes, "keshi"));
q3a2.addEventListener("click", score(outcomes, "waveToEarth"));
q3a3.addEventListener("click", score(outcomes, "yungKai"));
q3a3.addEventListener("click", score(outcomes, "waveToEarth"));
q3a4.addEventListener("click", score(outcomes, "grentperez"));