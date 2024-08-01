function Appendnumeric(num) {
  let display = document.getElementById("display");
  if (display.innerText == "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}
function Appendoperator(opt) {
  display.innerText += opt;
}
function Calculate() {
  try {
    let val = display.innerText;
    let a = val.replace("^", "**");
    console.log(a);
    display.innerText = eval(a);
  } catch (e) {
    display.innerText = "Error";
  }
}
function Appendopt(option) {
  if (option === "AC") {
    display.innerText = "0";
  } else if (option === "DEL") {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
      display.innerText = "0";
    }
  } else {
    display.innerText += option;
  }
}
