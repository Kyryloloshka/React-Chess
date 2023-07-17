import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames, FigurePrioritet } from './Figure';
import blackLogo from '../../assets/bb.png'
import whiteLogo from '../../assets/wb.png'


export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.BISHOP;
		this.prioritet = FigurePrioritet.BISHOP;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		if (this.cell.isEmptyDiagonal(target)) return true;
		return false
	}
}
