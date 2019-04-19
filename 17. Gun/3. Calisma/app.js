var pList = document.querySelectorAll('.tres');


if (pList.length > 0) {
    
    for (var i = 0; i < pList.length; i++) {
        
        pList[i].style.listStyle = 'square';
        console.log(pList.length);
        
    }
    
} else {

    document.write('There is no element');
    
}