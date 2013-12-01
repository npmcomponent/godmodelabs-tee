var through = require('through');
var slice = [].slice;

module.exports = mux;

function mux() {
  var args = slice.call(arguments);

  var tr = through();
  for (var i = 0; i < args.length; i++) {
    tr.pipe(args[i]);
  }

  return tr;
}
