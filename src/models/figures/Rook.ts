import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames, FigurePrioritet } from './Figure';

import blackLogo from '../../assets/br.png'
import whiteLogo from '../../assets/wr.png'

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.ROOK;
		this.prioritet = FigurePrioritet.ROOK;
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		if (this.cell.isEmptyVertical(target)) return true;
		if (this.cell.isEmptyHorizontal(target)) return true;
		return false
	}
}
