var al = document.getElementById('al').addEventListener('click', function() {

    var item = prompt('Shop ?', 'Ruby');

    var ul = document.getElementsByTagName('ul')[0];

    var li = document.createElement('li');

    li.textContent = item;

    ul.appendChild(li);

});

var at = document.getElementById('ae').addEventListener('click', function() {

    var item = prompt('Shop ?', 'C');

    var ul = document.getElementsByTagName('ul')[0];

    var li = document.createElement('li');

    li.textContent = item;

    ul.insertBefore(li, ul.childNodes[0]);

});

var prio = document.getElementById('prio').addEventListener('click', function() {

    var li = document.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {

        li[i].setAttribute('class', 'prio');

    }

});


var li = document.getElementsByTagName('li');

var div = document.getElementsByTagName('span')[0];

div.textContent = li.length;