function Car(brand, model, oil) {

    this.brand = brand;
    this.model = model;
    this.oil = oil;

}

var myCar = new Car('Maserati', '2019', 'diesel');

var detail = myCar.brand + ', ';
detail += myCar.model + ' model, ';
detail += myCar.oil;

var div1 = document.getElementsByTagName('div')[0];
div1.textContent = detail;