var url = require('url'),
	querystring = require('querystring');

//Input adress
var addr = prompt();

//Work with addres

var fileAddr = url.resolve(addr, 
	querystring.parse(url.parse(addr).query).file);

console.log(fileAddr);	