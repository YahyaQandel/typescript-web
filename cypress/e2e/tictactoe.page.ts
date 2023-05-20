import { Board } from './board.section';
import { InfoSection } from './info.section';

export class TicTacToe {
    private _url = 'http://tictactoe.automationtesting.tech';

    private _board = new Board();
    private _infoPanel = new InfoSection();

    visit(): void {
        cy.visit(this._url);
    }

    get board(): Board {
        return this._board;
    }

    get info(): InfoSection {
        return this._infoPanel;
    }
}