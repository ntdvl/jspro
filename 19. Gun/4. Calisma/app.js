var el = document.createElement('span');

var text = document.createTextNode('    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia cum aliquam harum atque, labore quo quaerat iste vitae earum voluptatem! Quod ipsa similique tempore consectetur ut eius dolorem nesciunt?');

el.appendChild(text);

var parent = document.getElementsByTagName('p')[0].parentNode;

parent.appendChild(el);