import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { TicTacToe } from './tictactoe.page';

const tictactoePage = new TicTacToe();

Given('user navigated to tic tac toe game screen', () => {
  tictactoePage.visit();
});

When('user {string} plays in index {int}', (symbol: string, index: number) => {
  tictactoePage.play(index, symbol);
});

Then('the info panel should show that the winner is player {string}', (player: string) => {
  tictactoePage.winner.should('contain.text', player);
});
