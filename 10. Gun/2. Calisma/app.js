var hotel = {

    'name': 'Palace',
    'roomPrice': 300,
    'discount': 23,
    offerPrice: function() {

        var x = ((this.roomPrice - this.discount) * 100) / 100;
        return x;
        
    }

}


document.getElementsByTagName('div')[0].textContent = hotel.offerPrice();