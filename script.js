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
  console.log("laufey = " +outcomes.laufey)
  return obj[person];
}
function question() {
  quesCount += 1;
  console.log("question = " + quesCount);
  if (quesCount >= 3) {
    console.log("the quiz is done")
    highestScore();
    findResult();
  }
}
function highestScore() {
  var scoreArray = Object.values(outcomes); //takes the values of the properties and makes them into an array
  console.log(scoreArray);
  var max = Math.max(scoreArray); 
}
function findResult() {
  if (outcomes.laufey == max) {
    console.log("Promise by Laufey");
  } else if (outcomes.grentperez == max) {
    console.log("Us Without Me by grentperez");
  } else if (outcomes.keshi == max) {
    console.log("LIMBO by keshi");
  } else if (outcomes.yungKai == max) {
    console.log("blue by yung kai");
  } else if (outcomes.waveToEarth == max) {
    console.log("bad. by wave to earth");
  } else {
    console.log("error");
  }
}

//question 1
q1a1.addEventListener("click", function() {
  score(outcomes, "waveToEarth");
  question();
});
q1a2.addEventListener("click", function() {
  score(outcomes, "keshi");
  question();
});
q1a2.addEventListener("click", function() {
  score(outcomes, "grentperez");
  question();
});
q1a3.addEventListener("click", function() {
  score(outcomes, "yungKai");
  question();
});
q1a4.addEventListener("click", function() {
  score(outcomes, "laufey");
  question();
});

//question 2
q2a1.addEventListener("click", function() {
  score(outcomes, "grentperez");
  question();
});
q2a2.addEventListener("click", function() {
  score(outcomes, "yungKai");
  question();
});
q2a2.addEventListener("click", function() {
  score(outcomes, "waveToEarth");
  question();
});
q2a3.addEventListener("click", function() {
  score(outcomes, "laufey");
  question();
});
q2a4.addEventListener("click", function() {
  score(outcomes, "keshi");
  question();
});

//question 3
q3a1.addEventListener("click", function() {
  score(outcomes, "laufey");
  question();
});
q3a2.addEventListener("click", function() {
  score(outcomes, "keshi");
  question();
});
q3a2.addEventListener("click", function() {
  score(outcomes, "waveToEarth");
  question();
});
q3a3.addEventListener("click", function() {
  score(outcomes, "yungKai");
  question();
});
q3a3.addEventListener("click", function() {
  score(outcomes, "waveToEarth");
  question();
});
q3a4.addEventListener("click", function() {
  score(outcomes, "grentperez");
  question();
});