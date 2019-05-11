var input = document.getElementsByTagName('input')[0];

var result = document.getElementsByTagName('p')[0];

function check(char) {

    if (input.value.length < char) {

        result.innerHTML = 'User name must be more ' + char + ' characters.';

    } else {

        result.innerHTML = 'Ok';

    }

}


input.addEventListener('blur', function() {
    check(6);
}, false);