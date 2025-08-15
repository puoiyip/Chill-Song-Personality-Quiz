var quesCount = 0;
//outcomes
var outcomes = {
  waveToEarth: 0,
  grentperez: 0,
  laufey: 0,
  yungKai: 0,
  keshi: 0,
}
var laufeyOutcome = document.getElementById("laufey");
var grentperezOutcome = document.getElementById("grentperez");
var yungKaiOutcome = document.getElementById("yung-kai");
var keshiOutcome = document.getElementById("keshi");
var waveToEarthOutcome = document.getElementById("wave-to-earth");


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

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");

var max;

function score(obj, person) {
  obj[person] += 1;
  console.log(person +"score = " +obj[person]);
  return obj[person];
}
function highestScore() {
  var scoreArray = Object.values(outcomes); //takes the values of the properties and makes them into an array
  console.log(scoreArray);
  max = Math.max(...scoreArray); 
  return max;
}
function findResult() {
  if (outcomes.laufey == max) {
    console.log("Promise by Laufey");
    laufeyOutcome.style.display = "block";
    
  } else if (outcomes.grentperez == max) {
    console.log("Movie Scene by grentperez");
    grentperezOutcome.style.display = "block";

  } else if (outcomes.keshi == max) {
    console.log("LIMBO by keshi");
    keshiOutcome.style.display = "block";
    
  } else if (outcomes.yungKai == max) {
    console.log("blue by yung kai");
    yungKaiOutcome.style.display = "block";

  } else if (outcomes.waveToEarth == max) {
    console.log("bad. by wave to earth");
    waveToEarthOutcome.style.display = "block";

  } else {
    console.log("error");
  }
}
function question() {
  quesCount += 1;
  console.log("question = " + quesCount);
  if (quesCount >= 3 && q1a1.disabled == true && q2a1.disabled == true && q3a1.disabled == true && q4a1.disabled == true) {
    console.log("the quiz is done");
    highestScore();
    console.log(max);
    result.style.backgroundColor = "#B33F62";
    result.style.cursor = "pointer";
    result.style.transition = "0.3s ease";
  }
}
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q1a1.style.backgroundColor = "#d76a8b";
  q1a2.style.backgroundColor = "#d76a8b";
  q1a3.style.backgroundColor = "#d76a8b";
  q1a4.style.backgroundColor = "#d76a8b";
  q1a1.style.cursor = "not-allowed";
  q1a2.style.cursor = "not-allowed";
  q1a3.style.cursor = "not-allowed";
  q1a4.style.cursor = "not-allowed";
}
function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a1.style.backgroundColor = "#d76a8b";
  q2a2.style.backgroundColor = "#d76a8b";
  q2a3.style.backgroundColor = "#d76a8b";
  q2a4.style.backgroundColor = "#d76a8b";
  q2a1.style.cursor = "not-allowed";
  q2a2.style.cursor = "not-allowed";
  q2a3.style.cursor = "not-allowed";
  q2a4.style.cursor = "not-allowed";
}
function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q3a1.style.backgroundColor = "#d76a8b";
  q3a2.style.backgroundColor = "#d76a8b";
  q3a3.style.backgroundColor = "#d76a8b";
  q3a4.style.backgroundColor = "#d76a8b";
  q3a1.style.cursor = "not-allowed";
  q3a2.style.cursor = "not-allowed";
  q3a3.style.cursor = "not-allowed";
  q3a4.style.cursor = "not-allowed";
}
function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
  q4a1.style.backgroundColor = "#d76a8b";
  q4a2.style.backgroundColor = "#d76a8b";
  q4a3.style.backgroundColor = "#d76a8b";
  q4a4.style.backgroundColor = "#d76a8b";
  q4a1.style.cursor = "not-allowed";
  q4a2.style.cursor = "not-allowed";
  q4a3.style.cursor = "not-allowed";
  q4a4.style.cursor = "not-allowed";
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

//question 4
q4a1.addEventListener("click", function() {
  score(outcomes, "waveToEarth");
  question();
});
q4a2.addEventListener("click", function() {
  score(outcomes, "grentperez");
  question();
});
q4a3.addEventListener("click", function() {
  score(outcomes, "yungKai");
  question();
});
q4a3.addEventListener("click", function() {
  score(outcomes, "laufey");
  question();
});
q4a3.addEventListener("click", function() {
  score(outcomes, "keshi");
  question();
});

function restartButton() {
  outcomes.laufey = 0;
  outcomes.grentperez = 0;
  outcomes.yungKai = 0;
  outcomes.keshi = 0;
  outcomes.waveToEarth = 0;
  max = 0;
  quesCount = 0;
  
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q1a1.style.backgroundColor = "#B33F62";
  q1a2.style.backgroundColor = "#B33F62";
  q1a3.style.backgroundColor = "#B33F62";
  q1a4.style.backgroundColor = "#B33F62";
  q1a1.style.cursor = "pointer";
  q1a2.style.cursor = "pointer";
  q1a3.style.cursor = "pointer";
  q1a4.style.cursor = "pointer";
  
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q2a1.style.backgroundColor = "#B33F62";
  q2a2.style.backgroundColor = "#B33F62";
  q2a3.style.backgroundColor = "#B33F62";
  q2a4.style.backgroundColor = "#B33F62";
  q2a1.style.cursor = "pointer";
  q2a2.style.cursor = "pointer";
  q2a3.style.cursor = "pointer";
  q2a4.style.cursor = "pointer";
  
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q3a1.style.backgroundColor = "#B33F62";
  q3a2.style.backgroundColor = "#B33F62";
  q3a3.style.backgroundColor = "#B33F62";
  q3a4.style.backgroundColor = "#B33F62";
  q3a1.style.cursor = "pointer";
  q3a2.style.cursor = "pointer";
  q3a3.style.cursor = "pointer";
  q3a4.style.cursor = "pointer";
  
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q4a1.style.backgroundColor = "#B33F62";
  q4a2.style.backgroundColor = "#B33F62";
  q4a3.style.backgroundColor = "#B33F62";
  q4a4.style.backgroundColor = "#B33F62";
  q4a1.style.cursor = "pointer";
  q4a2.style.cursor = "pointer";
  q4a3.style.cursor = "pointer";
  q4a4.style.cursor = "pointer";
  
  laufeyOutcome.style.display = "none";
  grentperezOutcome.style.display = "none";
  keshiOutcome.style.display = "none";
  yungKaiOutcome.style.display = "none";
  waveToEarthOutcome.style.display = "none";

  result.style.backgroundColor = "#d76a8b";
  result.style.cursor = "not-allowed";
}
