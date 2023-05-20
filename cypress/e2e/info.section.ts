
export class InfoSection {
    private _selectors = {
        goToMoveButton: 'li',
        winner: '#winner'
    };

    goToMove(moveNum: number): void {
        cy.get(this._selectors.goToMoveButton).eq(moveNum).click();
    }

    get winner(): Cypress.Chainable<any> {
        return cy.get(this._selectors.winner);
    }
}