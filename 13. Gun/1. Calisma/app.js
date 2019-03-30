var msg = prompt('How old are you', 'e.g. 18');

var result = msg.length;


switch (result) {
    case 1:
        document.write('Oomaz');
        break;

    case 2:
        document.write('Olur');
        break;

    default:
        document.write('What is this ?');
        break;
}