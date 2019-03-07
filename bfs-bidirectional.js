const BFS = (s, t) => {
  let sQueue = [s];
  let tQueue = [t];
  let targetReached = false;
  while(!targetReached && (tQueue.length > 0 || sQueue.length > 0)){
    if(sQueue.length > 0){
       sQueue = processQueue(sQueue, s, t);
    }
    if(tQueue.length > 0){
      tQueue = processQueue(tQueue, t, s);
    }
    if(sQueue === true || tQueue === true){targetReached = true;}
  }
  return targetReached;
}
const processQueue = (queue, root, target) => {
  let current = queue.shift();
  console.log("current ", current);
  console.log("root ", root);
  if(current == target || current.visit == target) {return true;}
  current.visit = root;

  current.adj.forEach(node => {
    if(graph[node].visit!==root){
      queue.push(graph[node]);
    	console.log(queue.length);
		}
  });
  return queue;
}

createNode = (children) => {
  return { adj: children,
           visit: null }
}
let n7 = createNode(["6", "4"]);
let n6 = createNode(["2", "3", "4", "7"]);
let n5 = createNode(["4"]);
let n4 = createNode(["0", "1", "6", "7", "5"]);
let n3 = createNode(["0", "6"]);
let n2 = createNode(["0", "6"]);
let n1 = createNode(["4"]);
let n0 = createNode(["4", "2", "3"]);
let graph = {};
[n0, n1, n2, n3, n4, n5, n6, n7].forEach((node, i) => {
  let key = i.toString()
  graph = Object.assign({}, graph, {[key]:node});
});

console.log(BFS(n0, n5));
