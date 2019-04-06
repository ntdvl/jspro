var divs = document.getElementsByTagName('div');

if (divs.length > 0) {

    for(var i = 0; i < divs.length; i++) {

        console.log(divs[i].textContent)

    }

} else {

    console.log('Ooomaazz');

}