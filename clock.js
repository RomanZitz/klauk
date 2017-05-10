var hands = [];

hands.push(document.querySelector('#secondhand > *'));
hands.push(document.querySelector('#minutehand > *'));
hands.push(document.querySelector('#hourhand > *'));

var cx = 100;
var cy = 100;

function shifter(val) {
  return [val, cx, cy].join(' ');
}

var date = new Date();
var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
var minuteAngle = 360 * date.getMinutes() / 60;
var secAngle = 360 * date.getSeconds() / 60;


hands[0].setAttribute('from', shifter(secAngle));
hands[0].setAttribute('to', shifter(secAngle + 360));
hands[1].setAttribute('from', shifter(minuteAngle));
hands[1].setAttribute('to', shifter(minuteAngle + 360));
hands[2].setAttribute('from', shifter(hoursAngle));
hands[2].setAttribute('to', shifter(hoursAngle + 360));


var carre10 = document.getElementById("carre1");
var carre20 = document.getElementById("carre2");
var hours = date.getHours();
console.log("juste avant le if");
if ((hours => 3 && hours < 9) || (hours => 15 && hours < 23)) {
  carre20.style.display="none";
  console.log("slt le if");
}
else {
  carre10.style.display="none";
  console.log("slt le else");
}

console.log(hours);
