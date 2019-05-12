var input = document.getElementsByTagName('input')[0];
var result = document.getElementsByTagName('p')[0];

function check(char) {

    if (input.value.length < char ) {

        result.innerHTML = 'Value must be ' + char + ' or more characters';
        
    } else {

        result.innerHTML = '';

    }

}

if (input.addEventListener) {

    input.addEventListener('blur', function() {

        check(5);

    }, false);

} else {

    input.attachEvent('onblur', function() {
        check(5);
    });

}