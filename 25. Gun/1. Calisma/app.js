function test(e) {

    console.log(e.currentTarget);

}

const list = document.getElementsByClassName('test')[0];
list.addEventListener('click', test);