function get(width, height, depth) {

    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;

}

var test = console.log(get(3, 2, 3)[0]);