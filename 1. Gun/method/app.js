var hotel = {

    room: 55,
    book: 33,
    checkAvailability: function() {

        return this.room - this.book;
    
    },    
    ntd: function() {

        if (this.checkAvailability() > 0) {
            return true;
        } else {
            return false;
        }

    }
}

console.log('Booking status => ' + hotel.checkAvailability() + ' : ' + hotel.ntd());

console.log(document.lastModified + ' ' +  document.title + ' ' + document.URL);