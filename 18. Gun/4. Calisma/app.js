var li = document.getElementsByTagName('li')[0];

console.log(li.firstChild.nodeValue);

var li2 = document.getElementsByTagName('li')[1];

console.log(li2.firstChild.firstChild.nodeValue);

var li3 = document.getElementsByTagName('li')[2];

console.log(li3.firstChild.firstChild.nodeValue);

var sib3 = li3.firstChild.nextSibling.firstChild.nodeValue;

console.log(sib3);