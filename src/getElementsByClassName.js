var getElementsByClassName = function(className
) {
  var elements = [];
  var node = document.body;
  // recursive function
  var getClassName = function(node) {
    // Base case
    // push to result array if node has matching class attributes and class name
    if (node.classList && node.classList.contains(className)) {
      elements.push(node);
    }
    // Recursive case
    // iterate over child nodes
    if (node.childNodes) {
      for (var i = 0; i < node.childNodes.length; i++) {
        getClassName(node.childNodes[i]);
      }
    }
  };
  getClassName(node);
  return elements;
};
