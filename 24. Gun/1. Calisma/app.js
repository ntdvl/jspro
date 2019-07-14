const ul = document.getElementsByTagName('ul')[0];

ul.addEventListener('click', (e) => console.log(e.target.innerHTML));


exports.catchErrors = (fn) =>

