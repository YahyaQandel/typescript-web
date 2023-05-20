import { TicTacToe } from './tictactoe.page';

describe('tic tac toe spec', () => {
  const tictactoePage = new TicTacToe();
  it('user wins when a row is complete', () => {
    tictactoePage.visit();
    tictactoePage.play(0, 'X');
    tictactoePage.play(3, 'O');
    tictactoePage.play(1, 'X');
    tictactoePage.play(4, 'O');
    tictactoePage.play(2, 'X');
    tictactoePage.winner.should('contain.text', 'X');
  });

  it('a cell selected by a player cannot be selected by the other player', () => {
    const tictactoePage = new TicTacToe();
    tictactoePage.visit();
    tictactoePage.play(0, 'X');
    tictactoePage.play(0, 'O');
    tictactoePage.getCell(0).should('have.text', 'X');
  });

  it('go back to certain move', async () => {
    const tictactoePage = new TicTacToe();
    let currentState: string[];
    let move: number;
    tictactoePage.visit();
    tictactoePage.play(0, 'X')
    tictactoePage.play(1, 'O')
    tictactoePage.play(4, 'X')
    tictactoePage.play(8, 'O');
    move = 2;
    tictactoePage.goToMove(move);
    currentState = await tictactoePage.currentBoardState;
    expect(currentState).to.deep.equal(tictactoePage.getBoardStateAtMove(move));
    // ------------------------------------------ //
    move = 3;
    tictactoePage.goToMove(move);
    currentState = await tictactoePage.currentBoardState;
    expect(currentState).to.deep.equal(tictactoePage.getBoardStateAtMove(move));
    // ------------------------------------------ //
    move = 4;
    tictactoePage.goToMove(move);
    currentState = await tictactoePage.currentBoardState;
    expect(currentState).to.deep.equal(tictactoePage.getBoardStateAtMove(move));
  });
});
