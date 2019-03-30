var score = window.prompt('Score', 'e.g. 40');

switch (score) {
    case '60':
        document.write('Hard work');
        break;

    case '70':
        document.write('You\'ll pass');
        break;

    case '80':
        document.write('Good');
        break;

    case '90':
        document.write('Excellent');
        break;
            

    default:
        document.write('Hmm');
        break;
}