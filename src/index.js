
exports.min = function min(array) {
  if (array && array.length) {
    return Math.min(...array);
  } else {
    return 0;
  }
}

exports.max = function max(array) {
  if (array && array.length) {
    return Math.max(...array);
  } else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array && array.length) {
    const total = array.reduce((total, amount) => total += amount);
    return total / array.length;
  } else {
    return 0;
  }
}