import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { TicTacToe } from './pages/tictactoe.page';

const tictactoePage = new TicTacToe();

Given('user navigated to tic tac toe game screen', () => {
  tictactoePage.visit();
});

When('user {string} plays in cell {int}', (symbol: string, index: number) => {
  tictactoePage.play(index - 1, symbol);
});

Then('the info panel should show that the winner is player {string}', (player: string) => {
  tictactoePage.winner.should('contain.text', player);
});

Then('cell {int} should has {string} as its value', (index: number, value: string) => {
  tictactoePage.getCell(index - 1).should('have.text', 'X');
});