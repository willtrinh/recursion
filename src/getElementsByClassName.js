var getElementsByClassName = function(className, node) {
  var nodes = [];
  node = node || document.body;

  // compare node's classname with className
  if (node.classList && node.classList.contains(className)) {
    // if matched, save node
    nodes.push(node);
  }

  // iterate over child nodes
  for (var i = 0; i < node.childNodes.length; i++) {
    // for each child, invoke getElementsByClassName
    var results = getElementsByClassName(className, node.childNodes[i]);
    nodes = nodes.concat(results);
  }

  return nodes;
};
