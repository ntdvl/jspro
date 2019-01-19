var today = new Date();
var hour = today.getHours();
var min = today.getMinutes();
var sn = today.getSeconds();

var h3 = document.getElementById('time');

if (hour > 18) {
    h3.innerHTML = 'İyi akşamlar';
} else if (hour > 12) {

    h3.innerHTML = 'İyi günler';

} else if (hour > 0) {

    h3.innerHTML = 'İyi sabaharlar'

} else {

    h3.innerHTML = 'Hoşgeldiniz';

}