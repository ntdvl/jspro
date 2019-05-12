var input = document.getElementsByTagName('input')[0];
var result = document.getElementsByTagName('p')[0];

function check(e, char) {

    if (input.value.length < char) {
        
        result.innerHTML = 'Character must be ' + char + ' characters.' + e.eventPhase;
        console.log(e.target);
        

    } else {

        result.innerHTML = 'Yes';

    }

}

input.addEventListener('blur', function(e){
    check(e, 5);
}, false);