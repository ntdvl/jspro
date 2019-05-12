var input = document.getElementsByTagName('input')[0];
var result = document.getElementsByTagName('p')[0];

function check(e, char) {

    if (input.value.length < char) {

        result.innerHTML = 'User name must be ' + char + ' characters.';

    } else {

        result.innerHTML = '';

    }

}

input.addEventListener('blur', function(e) {

    check(e, 8);

}, false);