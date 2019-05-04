var li = document.getElementsByTagName('li');

for (var i = 0; i < li.length; i++) {

    if (li[i].hasAttribute('class')) {

        li[i].removeAttribute('class');

    } else {

        console.log('There is no remove to element');

    }   

}