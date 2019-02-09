var home = {

    name: 'test',
    rooms: 7,
    garage: true,
    sun: ['norht', 'south', 'east'],
    greet: function() {

        console.log('Welcome to my home');

    }

}

// console.log(home.garage);
// home.greet();

var homeName = home['name'];
console.log(typeof homeName + ' : ' + homeName);

var homeTest = home['greet']();


var div = document.getElementsByTagName('div')[0];
div.textContent = homeName;

var div2 = document.getElementsByTagName('div')[1];
div2.textContent = home['rooms'];