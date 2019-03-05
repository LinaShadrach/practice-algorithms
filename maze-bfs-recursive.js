var starterMaze ={0: {"exit": false, "checked":false, "edges":[1,2]}, 1: {"exit": false, "checked": false, "edges":[2,3]}, 2: {"exit": false, "checked":false, "edges":[]}, 3: {"exit": true, "checked":false, "edges":[]} }

function mazeSearch(maze, vertex){
  return mazeSearchHelper(maze, maze[vertex].edges);
}
function mazeSearchHelper(maze, queue){
  let newQueue = [];
  let exit;
  for(var i = 0; i<queue.length; i++){
    if(maze[queue[i]].exit){
      return true;
    }
    else{
      newQueue=union(maze[queue[i]].edges, newQueue)
    }
  }
  if(mazeSearchHelper(maze, newQueue)){return true;}
  return false;

}
function union(arr1, arr2){
  let newArr = arr2.slice();
  arr1.forEach(elem => {
    if(arr2.indexOf(elem)<0){
      newArr.push(elem);
    }
  });
  return newArr;
}


var z = mazeSearch(starterMaze, 0);
