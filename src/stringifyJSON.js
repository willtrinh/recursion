var stringifyJSON = function(obj) {
  // obj types and conditions check
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined) {
    return undefined;
  }
  // check if obj is array
  if (Array.isArray(obj)) {
    // create a new array and iterate through elements and map them
    return '[' + _.map(obj, function(item) {
      return stringifyJSON(item);
    }) + ']';
  }
  // check if obj is object
  if (typeof obj === 'object') {
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
};
