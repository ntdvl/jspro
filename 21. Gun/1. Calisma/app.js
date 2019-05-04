(function init() {

    var input = document.getElementsByTagName('input')[0];
    var inputAttr = input.getAttribute('type');

    if (inputAttr == 'button') {

        console.log('ok');

    } else {

        input.setAttribute('type', 'button');

    }

})();