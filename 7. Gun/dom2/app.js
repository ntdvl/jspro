var el = document.createElement('div');

var text = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit doloribus consequatur dolorem, veniam nam id consequuntur, eaque officiis quae rerum ut ex perferendis modi dicta hic illo cum sapiente?');

el.appendChild(text);

var ul = document.getElementsByTagName('ul')[0];

ul.appendChild(el);