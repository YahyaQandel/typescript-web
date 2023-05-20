import { TicTacToe } from './tictactoe.page';
const tictactoePage = new TicTacToe();

describe('tic tac toe parallelism spec 1', () => {
  it('user wins when a row is complete', () => {
    tictactoePage.visit();
    tictactoePage.board.squares[0].add('X');
    tictactoePage.board.squares[3].add('O');
    tictactoePage.board.squares[1].add('X');
    tictactoePage.board.squares[4].add('O');
    tictactoePage.board.squares[2].add('X');
    tictactoePage.info.winner.should('have.text', 'Winner: X')
  });
});

after(() => {
  tictactoePage.board.resetMoves();
});