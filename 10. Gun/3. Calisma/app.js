var pc = {

    name: 'ASUS',
    price: 3000,    
    discount: 16,
    offerPrice: function() {

        return this.price - ((this.price * this.discount) / 100);

    }

}


var price               = document.getElementById('1');
var specialRate         = document.getElementById('2');
var brandName           = document.getElementById('3');


price.textContent = pc.price + ' $';
specialRate.textContent = pc.offerPrice() + ' $';
brandName.innerHTML = pc.name;

var expireMsg, today, El;

function calculateExpire(today) {

    var weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);

    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()];

    date = weekFromToday.getDate();

    month = monthNames[weekFromToday.getMonth()];

    year = weekFromToday.getFullYear();

    expireMsg = 'Offer expires next ';
    expireMsg += day + '<br> (' + date + ' ' + month + ' ' + year + ')';
    return expireMsg;
}

today = new Date();
El = document.getElementById('test');
El.innerHTML = calculateExpire(today);