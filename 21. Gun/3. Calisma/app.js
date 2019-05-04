function limenu() {
    var lis = document.getElementsByTagName("li");
    var count = Math.min(lis.length, arguments.length);
    for (var x = 0; x < count; x++) {
        lis[x].setAttribute('id', arguments[x]);
    }
};

limenu("icon-dice","icon-clock");
