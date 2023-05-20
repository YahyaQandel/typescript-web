import { Square } from "./square";

export class Board {
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

    get squares(): Square[] {
        return this._squares;
    }

    getMoves(index: number) {
        return this._squares[index].moves[index];
    }

    resetMoves(): void {
        this._squares.forEach(square => {
            square.moves = {};
        });
    }
}