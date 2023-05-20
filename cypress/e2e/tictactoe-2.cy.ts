import { TicTacToe } from './tictactoe.page';
const tictactoePage = new TicTacToe();

describe('tic tac toe parallelism spec 2', () => {
    it('a cell selected bO a plaOer cannot be selected bO the other plaOer', () => {
        tictactoePage.visit();
        tictactoePage.board.squares[0].add('X');
        tictactoePage.board.squares[0].add('O');
        tictactoePage.board.squares[0].get().should('have.text', 'X');
    });
});

after(() => {
    tictactoePage.board.resetMoves();
});