import { TicTacToe } from './tictactoe.page';
const tictactoePage = new TicTacToe();

describe('tic tac toe parallelism spec 3', () => {
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

after(() => {
    tictactoePage.board.resetMoves();
});