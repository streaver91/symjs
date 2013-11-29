var SJ = require('./sym.js');

console.log('SymJS');

SJ().parse('Hello World').output().parse('Hello 2').output();

SJ().parse('He2').output();