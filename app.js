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

let coordinates = [
    "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i8", "j8", "k8", "l8", "m8", "n8", "o8", "p8",
    "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", "i7", "j7", "k7", "l7", "m7", "n7", "o7", "p7",
    "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "i6", "j6", "k6", "l6", "m6", "n6", "o6", "p6",
    "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "i5", "j5", "k5", "l5", "m5", "n5", "o5", "p5",
    "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i4", "j4", "k4", "l4", "m4", "n4", "o4", "p4",
    "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i3", "j3", "k3", "l3", "m3", "n3", "o3", "p3",
    "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2", "k2", "l2", "m2", "n2", "o2", "p2",
    "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1",
];

// unicode characters to represent pieces on the board

let pieces = [
    "", "-", "\u265F", "\u265A", "\u265E", "\u265D", "\u265C", "\u265B",
    "-", "\u2659", "-", "\u2654", "\u2658", "\u2657", "\u2656", "\u2655"
];

// color constants
WHITE = 8;
BLACK = 16;

// side to move 
let side = WHITE;

// cpu search board and select position
function search_position(side) {
    // position selector variables
    let piece;
    let type;
    let directions;
    let source_square;
    let target_square;
    let captured_square;
    let captured_piece;
    let step_vector;

    // loop over board squares
    for (let square = 0; square < 128; square++) {
        // make sure square is on the board
        if ((square & 0x88) == 0) {
            // init source square
            source_square = square

            // init piece to move
            piece = board[square];

            // make sure piece belongs to the side to move
            if (piece & side) {
                console.log(coordinates[source_square]);
            }
        }
    }
}

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
search_position(side);