var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var div = document.getElementsByTagName('div')[0];
div.textContent = total;