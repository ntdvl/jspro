var pass = 80;
var score = 79.9;

var isOk = Math.ceil(score) >= pass;

var div = document.getElementsByTagName('div')[0];
div.textContent = isOk;