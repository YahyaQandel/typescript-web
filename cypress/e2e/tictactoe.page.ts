import { Board } from './board.section';
import { InfoSection } from './info.section';

export class TicTacToe {
    private _url = 'http://tictactoe.automationtesting.tech';

    private _board = new Board();
    private _infoPanel = new InfoSection();

    visit(): void {
        cy.visit(this._url);
    }

    play(index: number, symbol: string): void {
        this._board.squares[index].click();
        this._board.updateBoardState(index, symbol);
        this._board.currentMove++;
    }

    get winner(): Cypress.Chainable<any> {
        return this._infoPanel.winner;
    }

    getCell(index: number): Cypress.Chainable<any> {
        return this._board.squares[index].get();
    }

    goToMove(moveNumber: number): void {
        this._infoPanel.goToMove(moveNumber);
    }

    getBoardStateAtMove(move: number): string[] {
        return this._board.getBoardStateAtMove(move);
    }

    get currentBoardState(): Promise<string[]> {
        return this._board.currentBoardState;
    }
}