import { Figure } from './figures/Figure';
import { Rook } from './figures/Rook';
import { Horse } from './figures/Horse';
import { Bishop } from './figures/Bishop';
import { Pawn } from './figures/Pawn';
import { King } from './figures/King';
import { Queen } from './figures/Queen';
import { Colors } from './Colors';
import { Cell } from './Cell';

export class Board {
	cells: Cell[][] = []

	lostBlackFigures: Figure[] = []
	lostWhiteFigures: Figure[] = []

	public initCells() {
		for (let i = 0; i < 8; i++) {
			const row: Cell[] = []
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new Cell(this, j, i, Colors.BLACK, null))
				} else {
					row.push(new Cell(this, j, i, Colors.WHITE, null))
				}
			}
			this.cells.push(row)
		}
	}

	public getCopyBoard(): Board {
		const newBoard = new Board();
		newBoard.cells = this.cells;
		newBoard.lostWhiteFigures = this.lostWhiteFigures;
		newBoard.lostBlackFigures = this.lostBlackFigures;
		return newBoard;
	}

	public highlightCells(selectedCell: Cell | null) {
		for (let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i];
			for (let j = 0; j < row.length; j++) {
				const target = row[j];
				target.available = !!selectedCell?.figure?.canMove(target)
			}
		}
	}
	public whichCellsUnderAttack(selectedCell: Cell | null) {
		for (let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i];
			for (let j = 0; j < row.length; j++) {
				const target = row[j];
				target.available = !!selectedCell?.figure?.canMove(target)
			}
		}
	}

	public getCell(x: number, y: number) {
		return this.cells[y][x]
	}

	private addPawns() {
		for (let i = 0; i < 8; i++) {
			new Pawn(Colors.BLACK, this.getCell(i, 1))
			new Pawn(Colors.WHITE, this.getCell(i, 6))
		}
	}
	private addKings() {
		new King(Colors.WHITE, this.getCell(4, 7))
		new King(Colors.BLACK, this.getCell(4, 0))
	}
	private addBishops() {
		new Bishop(Colors.WHITE, this.getCell(2, 7))
		new Bishop(Colors.BLACK, this.getCell(2, 0))
		new Bishop(Colors.WHITE, this.getCell(5, 7))
		new Bishop(Colors.BLACK, this.getCell(5, 0))
	}
	private addHorses() {
		new Horse(Colors.WHITE, this.getCell(1, 7))
		new Horse(Colors.BLACK, this.getCell(1, 0))
		new Horse(Colors.WHITE, this.getCell(6, 7))
		new Horse(Colors.BLACK, this.getCell(6, 0))
	}
	private addQueens() {
		new Queen(Colors.WHITE, this.getCell(3, 7))
		new Queen(Colors.BLACK, this.getCell(3, 0))
	}
	private addRooks() {
		new Rook(Colors.WHITE, this.getCell(0, 7))
		new Rook(Colors.BLACK, this.getCell(0, 0))
		new Rook(Colors.WHITE, this.getCell(7, 7))
		new Rook(Colors.BLACK, this.getCell(7, 0))
	}

	public addFigures() {
		this.addPawns()
		this.addKings()
		this.addBishops()
		this.addHorses()
		this.addQueens()
		this.addRooks()
	}
}
