var button = document.getElementsByTagName('button')[0];


button.addEventListener('click', function() {

    var ul = document.getElementsByTagName('ul')[0];

    ul.style = 'border: 1px solid red';

    var el = document.createElement('li');

    var node = document.createTextNode(window.prompt('Lütfen yapılacak bir görev yazın', 'Görev'));

    el.appendChild(node);

    ul.appendChild(el);

});