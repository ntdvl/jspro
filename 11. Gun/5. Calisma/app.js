var totalEarn = 9000;
var prevtotalEarn = 12000;

var vs = (totalEarn > prevtotalEarn) || (1 > 5);

var div = document.getElementsByTagName('div')[0];
div.textContent = vs;