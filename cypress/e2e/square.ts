export class Square {
    private _selectors = {
        square: '#square-',
    };
    private _index: number;
    private _moves = {};

    constructor(index: number) {
        this._index = index;
    }

    get(): Cypress.Chainable<any> {
        return cy.get(this._selectors.square + this._index);
    }

    add(symbol: string): void {
        this.get().click();
        this._moves[this._index] = symbol;
    }

    get moves() {
        return this._moves;
    }

    set moves(moves) {
        this._moves = moves;
    }
}