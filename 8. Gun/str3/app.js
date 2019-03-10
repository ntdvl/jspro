var str = 'Dünyanın farklı yerlerinden biraraya gelen beş arkadaşın, tasarım ağırlıklı konuların konuştuğu video serisi.'

var result = '<h2>length</h2><p>' + str.length + '</p>';
result += '<h2>uppercase</h2><p>' + str.toUpperCase() + '</p>';
result += '<h2>lowercase</h2><p>' + str.toLowerCase() + '</p>';
result += '<h2>character index : 12 </h2><p>' + str.charAt(12) + '</p>';
result += '<h2>indexOf(ın)</h2><p>' + str.indexOf('ın') + '</p>';
result += '<h2>lastIndexOf(ın)</h2><p>' + str.lastIndexOf('ın') + '</p>';
result += '<h2>substring(21, 35)</h2><p>' + str.substring(21, 35) + '</p>';
result += '<h2>replace(Dünyanın)</h2><p>' + str.replace('Dünyanın', 'Ülkenin') + '</p>';

var div = document.getElementsByTagName('div')[0];
div.innerHTML = result;