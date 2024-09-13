function knightMoves(start, finish, moves = []) {
  moves.push(start);
  let allPossibleMoves = getAllPos(start);

  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  allPossibleMoves.forEach((pos) => {
    board[pos[0]][pos[1]] = 1;
  });
  if (board[finish[0]][finish[1]] === 1) {
    moves.push(finish);
    return moves;
  } else {
  }
}

function getAllPos(pos, possibleMoves = []) {
  const offsetsX = [-1, -2, -2, 1, -1, 2, 1, 2];
  const offsetsY = [-2, -1, 1, -2, 2, -1, 2, 1];

  for (let i = 0; i < 8; i++) {
    let newX = pos[0] + offsetsX[i];
    let newY = pos[1] + offsetsY[i];
    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      possibleMoves.push([newX, newY]);
    }
  }

  return possibleMoves;
}
