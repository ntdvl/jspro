var i = 0;
var operator = window.prompt('Type');
var vary = 5;

if (operator == 'add') {

    while (i < 10) {        
        console.log(i + 5);
        i++;
    }

} else if (operator == 'multi') {

    while (i < 10) {
        console.log(i * 5);
        i++;
    }
    
} else {

    console.log('No');

}