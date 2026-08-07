// check the current state of the tic-tac-toe board (solved | not solved)
// assume board comes in n x n array
// 0 => empty
// 1 => X
// 2 => O

// Example:
// [
//     [0, 0, 1],
//     [0, 1, 2],
//     [2, 1, 0]
// ]

// return -1  if board is not yet finished AND no one has won yet (there are empty spots)
// return 1   if X won
// return 2   if O won
// return 0   if draw

const isSolved = board => {
    const size = board.length;
    const lines = [];

    // rows
    for (let r = 0; r < size; r++) lines.push(board[r]);

    // columns
    for (let c = 0; c < size; c++) lines.push(board.map(row => row[c]));

    // diagonals
    lines.push(board.map((row, i) => row[i]));
    lines.push(board.map((row, i) => row[size - 1 - i]));

    // check for winner
    let x = 0;
    for (const line of lines) {
        console.log("Iteration: ", x, "\n", line, "\n");
        if (line[0] !== 0 && line.every(cell => cell === line[0])) {
            return line[0];
        }
        x++;
    }

    // draw or not solved
    const hasEmpty = board.some(row => row.includes(0));
    return hasEmpty ? -1 : 0;
};

const board = [
    [1, 1, 1],
    [2, 1, 2],
    [2, 1, 0],
];

console.log(isSolved(board));
