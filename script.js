function checkVal() {
  for (var i = 0; i < str.length; i++) {
    var char = str.substring(i, i + 1);
    if (char < "0" || char > "9") {
      if (char != "(" && char != ")") {
        alert("Input Salah!");
        return false;
      }
    }
  }
  return true;
}

function clickme(x) {
  if (myform.display.value == null || myform.display.value == "0") myform.display.value = x;
  else myform.display.value += x;
}

function backspc() {
  var prevalue = myform.display.value;
  myform.display.value = prevalue.substr(0, prevalue.length - 1);
}

function fungsiAC() {
  myform.display.value = 0;
}

var lastResult = 0;
function resultme() {
  lastResult = eval(myform.display.value);
  myform.display.value = lastResult;
}

function clickPercent() {
  myform.display.value /= 100;
}

function changePlusMin() {
  myform.display.value *= -1;
}

function clickSin() {
  myform.display.value = Math.sin(myform.display.value);
}

function clickCos() {
  myform.display.value = Math.cos(myform.display.value);
}

function clickTan() {
  myform.display.value = Math.tan(myform.display.value);
}

function clickExp() {
  myform.display.value = Math.exp(myform.display.value);
}

function clickPi() {
  if (myform.display.value == null || myform.display.value == "0") myform.display.value = Math.PI;
  else myform.display.value += Math.PI;
}

function clickLn() {
  myform.display.value = Math.log(myform.display.value);
}

function bilanganE() {
  if (myform.display.value == null || myform.display.value == "0") myform.display.value = Math.E;
  else myform.display.value += Math.E;
}
