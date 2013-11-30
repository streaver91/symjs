/*!
 * SymJS JavaScript Library v0.0.1
 * https://github.com/streaver91/symjs
 *
 * Released under the MIT license
 * https://github.com/streaver91/symjs/blob/master/LICENSE
 *
 * Date: 11/28/2013
 */
(function() {
  var isNode = typeof module !== 'undefined' && module.exports;
  var parser = require('./parser.js'); 
  // Define a local copy of SJ
  var SJ = function(opts) {
    return new SJ.prototype.init(opts);
  };
  
  SJ.prototype = {
    constructor: SJ,
    
    init: function(opts) {
      // Start with an empty array 
      this.merge(this, {
        exprs: [],
        anses: [],
        vars: []
      });
    },
    
    load: function(str) {
      
    },
    
    parse: function(expr, opts) {
      this.exprs.push(expr);
      this.anses.push(parser.parse(expr));
      return this;
    },
    
    output: function(opts) {
      console.log(this.exprs);
      console.log(this.anses);
      return this;
    },
    
    // Merge properties of several objects into one object
    merge: function() {
      var target = arguments[0] || {};
      var len = arguments.length;
      var val;
      var obj;
      for(var i=1; i<len; i++) {
        obj = arguments[i];
        for(name in obj) {
          val = obj[name];
          // Ignore undefined value
          if(typeof val === 'undefined') {
            continue;
          }
          target[name] = val;
        }
      }
    }
  };
  
  SJ.prototype.init.prototype = SJ.prototype;
  
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = SJ;
  } else {
    self.SJ = SJ;
  }
  
})();
