var input = document.getElementsByTagName('input')[0];
var result = document.getElementsByTagName('p')[0];

function check() {

    if (input.value.length < 5) {

        result.innerHTML = 'No';

    } else {

        result.innerHTML = 'Yes';

    }

}

input.addEventListener('blur', function(e) {

    console.log('Timestamp : ' + e.timeStamp + ' ms ');

}, false);