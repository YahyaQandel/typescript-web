import { TicTacToe } from './tictactoe.page';
const tictactoePage = new TicTacToe();

describe('tic tac toe spec', () => {
  it('user wins when a row is complete', () => {
    tictactoePage.visit();
    tictactoePage.board.squares[0].add('X');
    tictactoePage.board.squares[3].add('O');
    tictactoePage.board.squares[1].add('X');
    tictactoePage.board.squares[4].add('O');
    tictactoePage.board.squares[2].add('X');
    tictactoePage.info.winner.should('have.text', 'Winner: X')
  });

  it('a cell selected bO a plaOer cannot be selected bO the other plaOer', () => {
    tictactoePage.visit();
    tictactoePage.board.squares[0].add('X');
    tictactoePage.board.squares[0].add('O');
    tictactoePage.board.squares[0].get().should('have.text', 'X');
  });

  it('go back to certain move', () => {
    tictactoePage.visit();
    tictactoePage.board.squares[0].add('X');
    tictactoePage.board.squares[1].add('O');
    tictactoePage.board.squares[4].add('X');
    tictactoePage.board.squares[8].add('O');
    tictactoePage.info.goToMove(2);
    tictactoePage.board.squares[0].get().should('have.text', tictactoePage.board.getMoves(0));
    tictactoePage.board.squares[1].get().should('have.text', tictactoePage.board.getMoves(1));
    tictactoePage.board.squares[4].get().should('have.text', '');
    tictactoePage.board.squares[8].get().should('have.text', '');
    tictactoePage.info.goToMove(3);
    tictactoePage.board.squares[0].get().should('have.text', tictactoePage.board.getMoves(0));
    tictactoePage.board.squares[1].get().should('have.text', tictactoePage.board.getMoves(1));
    tictactoePage.board.squares[4].get().should('have.text', tictactoePage.board.getMoves(4));
    tictactoePage.board.squares[8].get().should('have.text', '');
    tictactoePage.info.goToMove(4);
    tictactoePage.board.squares[0].get().should('have.text', tictactoePage.board.getMoves(0));
    tictactoePage.board.squares[1].get().should('have.text', tictactoePage.board.getMoves(1));
    tictactoePage.board.squares[4].get().should('have.text', tictactoePage.board.getMoves(4));
    tictactoePage.board.squares[8].get().should('have.text', tictactoePage.board.getMoves(8));
  });
});

afterEach(() => {
  tictactoePage.board.resetMoves();
});