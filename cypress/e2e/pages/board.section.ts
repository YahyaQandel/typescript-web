import { Square } from "./square";

export class Board {
    private _boardState: string[][];
    private _currentState: string[];
    private _currentMove: number;
    private _squares = [
        new Square(0),
        new Square(1),
        new Square(2),
        new Square(3),
        new Square(4),
        new Square(5),
        new Square(6),
        new Square(7),
        new Square(8),
    ];

    constructor() {
        this._currentMove = 0;
        this._boardState = [new Array<string>(9).fill('')];
        this._currentState = new Array<string>(9).fill('');
    }
    get squares(): Square[] {
        return this._squares;
    }

    get currentMove() {
        return this._currentMove;
    }

    set currentMove(move: number) {
        this._currentMove = move;
    }

    updateBoardState(index: number, symbol: string) {
        if (!this._boardState[this._currentMove]) {
            this._boardState[this._currentMove] = [...this._boardState[this._currentMove - 1]];
        }
        this._boardState[this._currentMove][index] = symbol;
    }

    getBoardStateAtMove(move: number) {
        return this._boardState[move - 1];
    }

    get currentBoardState(): Promise<string[]> {
        return new Cypress.Promise<any>((resolve) => {
            this._squares[0].getAll().each(($el, i) => {
                this._currentState[i] = $el[0].innerText;
                if (i === this._currentState.length - 1) {
                    resolve(this._currentState);
                }
            });
        });
    }

}