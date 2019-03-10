var str = 'It is a programming language ';

var upp = str.toUpperCase();

var low = str.toLowerCase();

var char = str.charAt(9);

var ind = str.indexOf('ng');

var lstind = str.lastIndexOf('ng');

var substr = str.substring(10, 16);

var spl = str.split(' ');

var trm = str.trim();

var rpl = str.replace('It', 'They');

document.write(str.length + '<br>');
document.write(upp + '<br>');
document.write(low + '<br>');
document.write(char + '<br>');
document.write(ind + '<br>');
document.write(lstind + '<br>');
document.write(substr + '<br>');
document.write(spl + ' : ' + typeof spl + console.log(spl[2]) + '<br>');
document.write(trm + '<br>');
document.write(rpl);