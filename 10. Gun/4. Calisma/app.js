// var homeName, homePrice, homeDiscount;

var home = {

    'name': 'Sweet Home',
    'price': 180,
    'discount': 30,
    'autopark': true,
    discountCal: function() {

        return (this.price - (this.price * this.discount) / 100);
        

    }

}

var homeName = document.getElementsByClassName('name')[0];
var homePrice = document.getElementsByClassName('price')[0];
var homeDiscount = document.getElementsByClassName('discount')[0];
var result = document.getElementsByClassName('result')[0];

homeName.textContent = home.name;
homePrice.textContent = 'Home Price : ' + home.price + ' $';
homeDiscount.textContent = 'Home Discount : ' + home.discount + ' $';
result.textContent = 'Result : ' + home.discountCal() + ' $';

function Offer() {

    var dates = new Date();

    var validity = new Date(dates.getTime() + 7 * 24 * 60 * 60 * 1000);

    var days = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday'];

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = days[validity.getDay()];

    var month = months[validity.getMonth()];

    var date = validity.getDate();

    var year = validity.getFullYear();

    var msg = 'Offer end : ';
    msg += day + ', ' + date + ', ' + month + ', ' + year;

    return msg;

}

var msg = document.getElementsByClassName('msg')[0]
msg.innerHTML = Offer();