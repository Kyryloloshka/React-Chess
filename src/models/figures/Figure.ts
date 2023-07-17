import { Cell } from './../Cell';
import { Colors } from './../Colors';
import logo from "../../assets/black-king.png"

export enum FigureNames {
	"FIGURE" = "Фігура",
	"KING" = "Король",
	"HORSE" = "Кінь",
	"PAWN" = "Пішак",
	"QUEEN" = "Ферзь",
	"ROOK" = "Тура",
	"BISHOP" = "Слон",
}
export enum FigurePrioritet {
	"FIGURE" = 0,
	"PAWN" = 1,
	"HORSE" = 2,
	"BISHOP" = 3,
	"ROOK" = 4,
	"QUEEN" = 5,
}


export class Figure {
	color: Colors;
	logo: typeof logo | null;
	cell: Cell;
	name: FigureNames;
	id: number;
	prioritet: FigurePrioritet;

	constructor(color: Colors, cell: Cell) {
		this.color = color;
		this.cell = cell;
		this.cell.figure = this;
		this.logo = null;
		this.name = FigureNames.FIGURE;
		this.id = Math.random()
		this.prioritet = FigurePrioritet.FIGURE
	}

	canMove(target: Cell): boolean {
		if (target.figure?.color === this.color) {
			return false
		}
		

		return true
	}
	moveFigure(target: Cell) {
	}
}
