var greeting = 'Hello ';
var name = 'David';
var msg = ', please check your order : ';

var welcome = greeting + name + msg;
var p = document.getElementById('hit');
p.textContent = welcome;

var sign = 'Test & ';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipment = 5;
var grandTotal = subTotal + shipment;


var usrName = document.getElementById('userName');
usrName.textContent = sign;

// document.getElementsByClassName('userName')[0].textContent = sign;

document.getElementsByClassName('total')[0].textContent = subTotal;

document.getElementsByClassName('shipment')[0].textContent = shipment;

document.getElementsByClassName('grandTotal')[0].textContent = grandTotal + ' $';