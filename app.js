// 0x88 board + positional scores

let board = [
    22, 20, 21, 23, 19, 21, 20, 22, 0, 0, 5, 5, 0, 0, 5, 0,
    18, 18, 18, 18, 18, 18, 18, 18, 5, 5, 0, 0, 0, 0, 5, 5,
    0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 15, 20, 20, 15, 10, 5,
    0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 20, 30, 30, 20, 10, 5,
    0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 20, 30, 30, 20, 10, 5,
    0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 15, 20, 20, 15, 10, 5,
    9, 9, 9, 9, 9, 9, 9, 9, 5, 5, 0, 0, 0, 0, 5, 5,
    14, 12, 13, 15, 11, 12, 12, 14, 0, 0, 5, 5, 0, 0, 5, 0
];

// unicode characters to represent pieces on the board

let pieces = [
    "", "-", "\u265F", "\u265A", "\u265E", "\u265D", "\u265C", "\u265B",
    "-", "\u2659", "-", "\u2654", "\u2658", "\u2657", "\u2656", "\u2655"
];



function print_board() {
    // init board string 
    let board_string = '';
    // loop over board rows
    for (let row = 0; row < 8; row++) {
        // loop over board columns
        for (let col = 0; col < 16; col++) {
            // convert row and column to board square
            let square = row * 16 + col;
            // make sure square is in board
            if ((square & 0x88) == 0)
            // update board string with pieces
                board_string += pieces[board[square] & 15] + '';
        }
        // append new line character to board string
        board_string += '\n'
    }
    // print board 
    console.log(board_string);
}

print_board();