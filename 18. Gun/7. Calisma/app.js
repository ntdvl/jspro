var li = document.getElementsByTagName('li')[2];

var node = li.firstChild.nodeValue;

var node2 = node.replace('33', '333');

li.firstChild.nodeValue = node2;