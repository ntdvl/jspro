let result = document.getElementsByTagName('span')[0];

function check(input, length) {

    if (input.value.length < length) {

        result.innerHTML = 'Noo';

    } else {

        result.innerHTML = 'Yes';

    }

}

const input = document.getElementsByTagName('input')[0];
input.addEventListener('blur', function() {
    check(input, 5);
}, false);

input.addEventListener('focus', function() {
    result.innerHTML = '';
}, false);