function check() {

    var result = document.getElementById('result');

    if (this.value.length < 5) {

        result.innerHTML = 'Ooomazzz';

    } else {

        result.innerHTML = 'Ok';

    }

}

var input = document.getElementsByTagName('input')[0];
input.onblur = check;