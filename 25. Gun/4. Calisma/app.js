function check() {

    const result = document.getElementsByTagName('span')[0];
    if (this.value.length < 5) {

        result.innerHTML = 'Noo';

    } else {

        result.innerHTML = 'Yes'; 

    }

}

const input = document.getElementsByTagName('input')[0];

input.addEventListener('blur', check, false);