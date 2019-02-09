var area = {

    long: 50,
    tall: 60,
    test: function() {

        // return area.long * area.tall;
        return this.long * this.tall;

    }
    
}

console.log(area['test']());