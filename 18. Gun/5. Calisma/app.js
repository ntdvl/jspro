var p = document.getElementsByTagName('p')[0];

var child = p.firstChild.firstChild.nodeValue;

var lChild = p.lastChild.nodeValue;

var sib = p.firstChild.nextSibling.firstChild.nodeValue;

console.log('firstchild : ' + child);

console.log('last child : ' + lChild);

console.log('first sibling : ' + sib);