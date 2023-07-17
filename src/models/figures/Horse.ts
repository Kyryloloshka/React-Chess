import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames, FigurePrioritet } from './Figure';

import blackLogo from '../../assets/bn.png'
import whiteLogo from '../../assets/wn.png'
export class Horse extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.HORSE;
		this.prioritet = FigurePrioritet.HORSE
	}
	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)


		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
	}
}
