var ndjson = require('./ndjson.js');

var strToArr = prompt();
var ArrToStr = prompt();

console.log(ndjson.parse(strToArr));
console.log(ndjson.stringify(ArrToStr));

