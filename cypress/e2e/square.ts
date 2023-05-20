export class Square {
    private _selectors = {
        square: '#square-',
        allSquares: '[id^=square-]'
    };
    private _index: number;

    constructor(index: number) {
        this._index = index;
    }

    get(): Cypress.Chainable<any> {
        return cy.get(this._selectors.square + this._index);
    }

    getAll(): Cypress.Chainable<any> {
        return cy.get(this._selectors.allSquares);
    }

    click(): void {
        this.get().click();
    }
}