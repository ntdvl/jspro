var ul = document.getElementsByTagName('ul')[0];

var create = document.createElement('li');
var node = document.createTextNode('test');

create.appendChild(node);
ul.appendChild(create);

var ul2 = document.getElementsByTagName('ul')[0];
var li2 = ul2.firstElementChild;
var text = li2.firstChild.nodeValue;
console.log(text);