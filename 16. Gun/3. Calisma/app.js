// var li = document.querySelector('li');
var li = document.querySelectorAll('li')[3];

var a = document.createElement('a');

var text = document.createTextNode('test');

var result = a.appendChild(text);

li.appendChild(a);