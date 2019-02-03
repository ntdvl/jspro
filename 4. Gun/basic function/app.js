var text = prompt('Ne yazmamı istersiniz ?', '');

function updateMessage(text) {

    document.getElementsByTagName('p')[0].innerText = text;
    console.log('function calling');
    console.log('...');
    console.log('function called');
    
}

updateMessage(text);