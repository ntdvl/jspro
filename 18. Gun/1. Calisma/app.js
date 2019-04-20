var ul = document.getElementsByTagName('ul')[0];

var child = ul.firstChild;

var lChild = ul.lastChild;

var child2 = ul.firstElementChild;

var lChild2 = ul.lastElementChild;


var sib1 = child.nextSibling;

var sib2 = sib1.previousSibling;

console.log(child);
console.log(lChild);

console.log('-------');

console.log(child2);
console.log(lChild2);

console.log('-----');

console.log(sib1);
console.log(sib2);