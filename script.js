var clicks = 0;
var amount = 1;
var cpsamount = 0;
var auto = false;
var clickcount = 0;
if (document.getElementById("boost-click-button-1").className == "boostclick-1") {
  var button1clickboost = 1;
  var button1clickcost = 5;
}
if (document.getElementById("boost-click-button-2").className == "boostclick-2") {
  var button2clickboost = 5;
  var button2clickcost = 25;
}
if (document.getElementById("boost-click-button-3").className == "boostclick-3") {
  var button3clickboost = 25;
  var button3clickcost = 150;
}
if (document.getElementById("boost-click-button-4").className == "boostclick-4") {
  var button4clickboost = 250;
  var button4clickcost = 5000;
}
if (document.getElementById("boost-click-button-5").className == "boostclick-5") {
  var button5clickboost = 1000;
  var button5clickcost = 25000;
}
if (document.getElementById("boost-auto-button-1").className == "boostauto-1") {
  var buttona1clickboost = 1;
  var buttona1clickcost = 20;
}
if (document.getElementById("boost-auto-button-2").className == "boostauto-2") {
  var buttona2clickboost = 5;
  var buttona2clickcost = 100;
}
if (document.getElementById("boost-auto-button-3").className == "boostauto-3") {
  var buttona3clickboost = 25;
  var buttona3clickcost = 1000;
}
if (document.getElementById("boost-auto-button-4").className == "boostauto-4") {
  var buttona4clickboost = 250;
  var buttona4clickcost = 5000;
}
if (document.getElementById("boost-auto-button-5").className == "boostauto-5") {
  var buttona5clickboost = 1000;
  var buttona5clickcost = 50000;
}
function updateClickCount() {
  document.getElementById("clickcount").innerHTML = "Ducks: " + clicks + ", DpS: " + cpsamount + ", DpC: " + amount;
  if (clickcount == 0) {
    end();
  };
  clickcount++;
}
updateClickCount();
function updateBoostText() {
  if (document.getElementById("boost-click-button-1").className == "boostclick-1") {
    document.getElementById("boost-1").childNodes[0].nodeValue = "DpC +1 | cost: " + button1clickcost + " ducks";
  }
  if (document.getElementById("boost-click-button-2").className == "boostclick-2") {
    document.getElementById("boost-2").childNodes[0].nodeValue = "DpC +5 | cost: " + button2clickcost + " ducks";
  }
  if (document.getElementById("boost-click-button-3").className == "boostclick-3") {
    document.getElementById("boost-3").childNodes[0].nodeValue = "DpC +25 | cost: " + button3clickcost + " ducks";
  }
  if (document.getElementById("boost-click-button-4").className == "boostclick-4") {
    document.getElementById("boost-4").childNodes[0].nodeValue = "DpC +250 | cost: " + button4clickcost + " ducks";
  }
  if (document.getElementById("boost-click-button-5").className == "boostclick-5") {
    document.getElementById("boost-5").childNodes[0].nodeValue = "DpC +1000 | cost: " + button5clickcost + " ducks";
  }
  if (document.getElementById("boost-auto-button-1").className == "boostauto-1") {
    document.getElementById("auto-1").childNodes[0].nodeValue = "DpS +1 | cost: " + buttona1clickcost + " ducks";
  }
  if (document.getElementById("boost-auto-button-2").className == "boostauto-2") {
    document.getElementById("auto-2").childNodes[0].nodeValue = "DpS +5 | cost: " + buttona2clickcost + " ducks";
  }
  if (document.getElementById("boost-auto-button-3").className == "boostauto-3") {
    document.getElementById("auto-3").childNodes[0].nodeValue = "DpS +25 | cost: " + buttona3clickcost + " ducks ";
  }
  if (document.getElementById("boost-auto-button-4").className == "boostauto-4") {
    document.getElementById("auto-4").childNodes[0].nodeValue = "DpS +250 | cost: " + buttona4clickcost + " ducks";
  }
  if (document.getElementById("boost-auto-button-5").className == "boostauto-5") {
    document.getElementById("auto-5").childNodes[0].nodeValue = "DpS +1000 | cost: " + buttona5clickcost + " ducks ";
  }
}
updateBoostText();
function increaseAmount1() {
  if (clicks >= button1clickcost) {
    clicks -= button1clickcost;
    amount += button1clickboost;
    button1clickcost = Math.round(1.9 * button1clickcost);
    updateBoostText();
    updateClickCount();
  }
}

function increaseAmount2() {
  if (clicks >= button2clickcost) {
    clicks -= button2clickcost;
    amount += button2clickboost;
    button2clickcost = Math.round(1.7 * button2clickcost);
    updateBoostText();
    updateClickCount();
  }
}

function increaseAmount3() {
  if (clicks >= button3clickcost) {
    clicks -= button3clickcost;
    amount += button3clickboost;
    button3clickcost = Math.round(1.5 * button3clickcost);
    updateBoostText();
    updateClickCount();
  }
}

function increaseAmount4() {
  if (clicks >= button4clickcost) {
    clicks -= button4clickcost;
    amount += button4clickboost;
    button4clickcost = Math.round(1.3 * button4clickcost);
    updateBoostText();
    updateClickCount();
  }
}

function increaseAmount5() {
  if (clicks >= button5clickcost) {
    clicks -= button5clickcost;
    amount += button5clickboost;
    button5clickcost = Math.round(1.2 * button5clickcost);
    updateBoostText();
    updateClickCount();
  }
}

function increaseAuto1() {
  if (clicks >= buttona1clickcost) {
    clicks -= buttona1clickcost;
    cpsamount += buttona1clickboost;
    buttona1clickcost = Math.round(1.3 * buttona1clickcost);
    updateBoostText();
    updateClickCount();
    auto = true;
  }
}

function increaseAuto2() {
  if (clicks >= buttona2clickcost) {
    clicks -= buttona2clickcost;
    cpsamount += buttona2clickboost;
    buttona2clickcost = Math.round(1.4 * buttona2clickcost);
    updateBoostText();
    updateClickCount();
    auto = true;
  }
}

function increaseAuto3() {
  if (clicks >= buttona3clickcost) {
    clicks -= buttona3clickcost;
    cpsamount += buttona3clickboost;
    buttona3clickcost = Math.round(1.35 * buttona3clickcost);
    updateBoostText();
    updateClickCount();
    auto = true;
  }
}

function increaseAuto4() {
  if (clicks >= buttona4clickcost) {
    clicks -= buttona4clickcost;
    cpsamount += buttona4clickboost;
    buttona4clickcost = Math.round(1.4 * buttona4clickcost);
    updateBoostText();
    updateClickCount();
    auto = true;
  }
}

function increaseAuto5() {
  if (clicks >= buttona5clickcost) {
    clicks -= buttona5clickcost;
    cpsamount += buttona5clickboost;
    buttona5clickcost = Math.round(1.35 * buttona5clickcost);
    updateBoostText();
    updateClickCount();
    auto = true;
  }
}

function end() {
  clicks = 0;
  amount = 1;
  cpsamount = 0;
  auto = false;
  if (document.getElementById("boost-click-button-1").className == "boostclick-1") {
    button1clickboost = 1;
    button1clickcost = 5;
  }
  if (document.getElementById("boost-click-button-2").className == "boostclick-2") {
    button2clickboost = 5;
    button2clickcost = 25;
  }
  if (document.getElementById("boost-click-button-3").className == "boostclick-3") {
    button3clickboost = 25;
    button3clickcost = 150;
  }
  if (document.getElementById("boost-click-button-4").className == "boostclick-4") {
    button4clickboost = 250;
    button4clickcost = 15000;
  }
  if (document.getElementById("boost-click-button-5").className == "boostclick-5") {
    button5clickboost = 2500;
    button5clickcost = 250000;
  }
  if (document.getElementById("boost-auto-button-1").className == "boostauto-1") {
    buttona1clickboost = 1;
    buttona1clickcost = 250;
  }
  if (document.getElementById("boost-auto-button-2").className == "boostauto-2") {
    buttona2clickboost = 5;
    buttona2clickcost = 1500;
  }
  if (document.getElementById("boost-auto-button-3").className == "boostauto-3") {
    buttona3clickboost = 25;
    buttona3clickcost = 10000;
  }
  if (document.getElementById("boost-auto-button-4").className == "boostauto-4") {
    buttona4clickboost = 250;
    buttona4clickcost = 500000;
  }
  if (document.getElementById("boost-auto-button-5").className == "boostauto-5") {
    buttona5clickboost = 12500;
    buttona5clickcost = 20000000;
  }
  updateClickCount();
  updateBoostText();
}

setInterval(function cpsupdate() {
  clicks += cpsamount;
  updateClickCount();
}, 1000);end();
