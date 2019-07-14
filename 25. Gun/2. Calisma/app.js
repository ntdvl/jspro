const list = document.getElementsByTagName('a')[0];

list.addEventListener('click', function(e) {

    if (e.preventDefault) {

        e.preventDefault();

    } else {

        e.returnValue = false;

    }

});