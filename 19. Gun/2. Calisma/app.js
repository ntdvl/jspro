var text = document.createTextNode('41');

var li = document.createElement('li');

li.appendChild(text);

var ul = document.getElementsByTagName('ul')[0];

ul.appendChild(li);