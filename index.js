function bfs(start, end) {
  const prefixR = [-2, -2, -1, 1, 2, 2, -1, 1];
  const prefixC = [1, -1, 2, 2, 1, -1, -2, -2];

  let queue = [start];
  let visited = new Set();
  let parent = new Map();

  visited.add(JSON.stringify(start));
  parent.set(JSON.stringify(start), null);

  while (queue.length > 0) {
    let pos = queue.shift();

    if (pos[0] === end[0] && pos[1] === end[1]) {
      return reconstructPath(parent, start, end);
    }

    for (let i = 0; i < 8; i++) {
      let newPos = [pos[0] + prefixR[i], pos[1] + prefixC[i]];

      if (newPos[0] < 0 || newPos[1] < 0 || newPos[0] > 7 || newPos[1] > 7) {
        continue;
      }

      let newPosStr = JSON.stringify(newPos);
      if (!visited.has(newPosStr)) {
        visited.add(newPosStr);
        queue.push(newPos);
        parent.set(newPosStr, pos);
      }
    }
  }

  return null;
}

function reconstructPath(parent, end) {
  let path = [];
  let current = end;

  while (current !== null) {
    path.push(current);
    current = parent.get(JSON.stringify(current));
  }

  return path.reverse();
}

function knightMoves(start, end) {
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let sRow = cols.indexOf(start[0]);
  let sCol = start[1] - 1;
  let eRow = cols.indexOf(end[0]);
  let eCol = end[1] - 1;

  let path = bfs([sRow, sCol], [eRow, eCol]);

  path.forEach((pos) => {
    console.log(`${cols[pos[0]]}${pos[1] + 1}`);
  });
}

knightMoves("a1", "h8");
