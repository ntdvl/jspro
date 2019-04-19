var ul = document.getElementsByTagName('ul')[0];

var parent = ul.parentNode;

var li = document.getElementsByTagName('li')[0];

var sib = li.nextSibling.nextSibling;

var child = ul.firstChild.nextSibling;

console.log(sib);

console.log(child);