var x = {}

x.name = 'Test';
x['gym'] = true;
x['gym2'] = false;

console.log(x);

delete x.gym2;

console.log(x);