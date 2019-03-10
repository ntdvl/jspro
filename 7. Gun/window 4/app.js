var str = '<h2>browser window</h2><p>width: ' + window.innerWidth + ' px </p>';
str += '<p>height : ' + window.innerHeight + ' px </p>';
str += '<h2>History</h2><p>items : ' + window.history.length + ' px </p>';
str += '<h2>screen</h2><p>width : ' + window.screen.width + ' px </p>'
str += '<p>height : ' + window.screen.height + ' px </p>';
var str2 = document.getElementsByTagName('div')[0];
str2.innerHTML = str;