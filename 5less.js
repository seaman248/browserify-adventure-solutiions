var url = require('url');

//Input adress
var addr = prompt();

//Work with addres

var fileAddr =
	url.hostname(addr) + 
	url.pathname(addr) + 
	url.parse(addr).query.file;

console.log(fileAddr);	