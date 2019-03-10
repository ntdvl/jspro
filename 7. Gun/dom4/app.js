var str = '<p><b>page title : </b> ' + document.title + '<br /></p>';
str += '<p><b>page address : </b>' + decodeURI(document.URL) + '</p>';
str += '<p><b>last modified : </b>' + document.lastModified + '</p>';
str += '<p><b>domain : </b>' + document.domain + '</p>';

var div = document.getElementsByTagName('footer')[0];
div.innerHTML = str;