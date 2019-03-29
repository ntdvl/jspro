var grade = 75;
var score = 77;


var msg;

if (score > grade) {

    msg = 'Congratz';

} else {

    msg = 'Fail';

}

var el = document.getElementsByTagName('div')[0];
el.textContent = msg;