var tod = new Date();
var to = tod.getFullYear();

var tod2 = new Date('November 10, 1938 09:05:00');

var diff = tod.getTime() - tod2.getTime();

var diff2 = diff / 31556952000;

console.log(diff2);