function check() {

    var result = document.getElementById('result');

    var user = document.getElementById('usrname');

    if (user.value.length < 5) {

        result.innerHTML = 'Not enough characters';

    } else {

        result.innerHTML = '';

    }

}