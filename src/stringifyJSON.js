var stringifyJSON = function(obj) {
  // check if obj is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // check if obj is array
  if (Array.isArray(obj)) {
    var results = [];
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return '[' + results.join(',') + ']';
  }
  // check if obj is object
  if (obj && typeof obj === 'object') {
    var result = [];
    // iterate over object keys
    for (var key in obj) {
      // undefined and function check
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        // push key: value to result array
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result + '}';
  }
  // every other primitive types
  return '' + obj;
};
