var exam = 'Test';

var obj = {
    exam: 'Quiz'
}

var x = function() {

    document.write(window.exam);

}

x();

var exam2 = 'Quiz';

var obj2 = {
    exam2: 'Test'
}

var y = function() {

    document.write(this.exam2);

}

obj2.getExam = y;
obj2.getExam();