var tech = ['HTML5', 'CSS3', 'Javascript', 'ES6'];

tech[4] = 'Ruby';
tech[5] = true;
tech[6] = new Array('Test', 'test2');

for (var i = 0; i < tech.length; i++) {
    console.log(tech[i]);    
}
console.log(tech.length);