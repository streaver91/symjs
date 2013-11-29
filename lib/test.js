var SJ = require('./sym.js');

console.log('SymJS');

SJ().parse('3+4').output().parse('5*2').output();

SJ().parse('4+(4*5)*(7+2)').output();