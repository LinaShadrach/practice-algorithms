var starterMaze ={0: {"exit": false, "checked":false, "edges":[1,2]}, 1: {"exit": false, "checked": false, "edges":[2,3]}, 2: {"exit": false, "checked":false, "edges":[]}, 3: {"exit": true, "checked":false, "edges":[]} }

function mazeSearch(maze, vertex){
  maze[vertex].checked=true;
  if(maze[vertex].exit){
    return true;
  }
  for(var i = 0; i<maze[vertex].edges.length; i++){
    if(!maze[maze[vertex].edges[i]].checked){
      if(mazeSearch(maze, maze[vertex].edges[i])){return true;}
    }
  }
  return false;
}

var z = mazeSearch(starterMaze, 0)
