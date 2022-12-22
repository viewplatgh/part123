const prompt = require('prompt');

function recurDown(d) {
  for (var i = 0; i < d.length; ++i) {
    if (i + 1 < d.length) {
      if (d[i] > d[i + 1]) {
        d[i] -= 1;
        return recurDown(d);
      }
    }
  }
  return d;
}

function getMax(o, d) {
  for (var i = 0; i < d.length; ++i) {
    if (o[i] != d[i]) {
      return [...d.slice(0, i + 1), ...Array(d.length - i - 1).fill(9)];
    }
  }
  return d;
}

prompt.get(['term'], function (err, result) {
  if (err) {
    return onErr(err);
  }

  var o = result.term.split('').map((d) => parseInt(d));
  var downed = recurDown(o.slice());

  var m = getMax(o, downed);

  console.log(parseInt(m.join('')));
});

function onErr(err) {
  console.log(err);
  return 1;
}
