function check() {

    var result = document.getElementsByTagName('p')[0];

    if (this.value.length < 5) {

        result.innerHTML = 'Character length is not less 5';

    } else {

        result.innerHTML = '';

    }

}

var input = document.getElementsByTagName('input')[0];
input.addEventListener('blur', check, false);