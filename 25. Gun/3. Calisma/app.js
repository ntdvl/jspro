function getTarget(e) {

    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}


function itemDone(e) {

    var target, parent, grandParent;

    target = getTarget(e);
    parent = target.parentNode;
    grandParent = parent.parentNode;
    grandParent.removeChild(parent);

    if (e.preventDefault) {

        e.preventDefault;

    } else {

        e.returnValue = false;

    }

}


const ul = document.getElementsByTagName('ul')[0];


if (ul.addEventListener) {


    ul.addEventListener('click', function(e) {

        itemDone(e);

    }, false);



} else {

    ul.attachEvent('onclick', function(e) {

        itemDone(e);

    });

}