var result = document.getElementsByTagName('span')[0];
var input = document.getElementsByTagName('input')[0];

function check(length) {

    if (input.value.length < length) {

        result.innerHTML = 'Not enough characters';

    } else {

        result.innerHTML = '';

    }

}

function tip(length) {

    result.innerHTML = 'Username must be ' + length + ' or more characters..';

}

input.addEventListener('focus', function() {
    tip(6);
}, false);
input.addEventListener('blur', function() {
    check(6);
}, false);