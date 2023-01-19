let boardSize = prompt('Di el tamaño del tablero')
let board = ""

if (boardSize != 0 && boardSize > 0) {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  
} else {
  console.log('Tamaño automatico de 8 x 8')
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  
}

console.log(board);