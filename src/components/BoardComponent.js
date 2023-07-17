import React, { useEffect, useState } from "react";
import useModal from "../hooks/useModal";
import CellComponent from "./CellComponent";
import ModalChooseFigure from './ModalChooseFigure';
import { Queen } from "../models/figures/Queen";
import CheckModal from "./CheckModal";
// import { Rook } from "../models/figures/Rook";
// import { Horse } from "../models/figures/Horse";
// import { Bishop } from "../models/figures/Bishop";



function BoardComponent({ board, setBoard, currentPlayer, swapPlayer, classesPointerNone, modalCheck }) {
	const [selectedCell, setSelectedCell] = useState(null)
	const chooseFigureModal = useModal(true)
	const [whatFigure, setWhatFigure] = useState(null);

	function click(cell) {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell);
			swapPlayer()
			setSelectedCell(null)
			updateBoard()
		} else {
			if (cell.figure?.color === currentPlayer?.color) {
				setSelectedCell(cell)
			}
		}

		if (cell.isPawnCanBeQueen(cell)) {
			// if (whatFigure === null) {
			// 	chooseFigureModal.open()
			// }
			// if (whatFigure === FigureNames.QUEEN) {
			new Queen(cell.figure.color, cell)
			// } else if (whatFigure === FigureNames.ROOK) {
			// 	new Rook(cell.figure.color, cell)
			// } else if (whatFigure === FigureNames.HORSE) {
			// 	new Horse(cell.figure.color, cell)
			// } else if (whatFigure === FigureNames.BISHOP) {
			// 	new Bishop(cell.figure.color, cell)
			// }
		}
	}


	useEffect(() => {
		highlightCells()

	}, [selectedCell])

	function highlightCells() {
		board.highlightCells(selectedCell)
		board.whichCellsUnderAttack(selectedCell)
		updateBoard()
	}

	function updateBoard() {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}
	return (
		<div className={`${classesPointerNone}`}>
			<div className="board">
				{board.cells.map((row, index) =>
					<React.Fragment key={index}>
						{row.map(cell =>
							<CellComponent
								click={click}
								cell={cell}
								selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
								key={cell.id}
							/>
						)}
					</React.Fragment>
				)}
			</div>
			{chooseFigureModal.isOpen && <ModalChooseFigure setWhatFigure={setWhatFigure} onClose={chooseFigureModal.close} />}
			{modalCheck.isOpen && <CheckModal onClose={modalCheck.close} />}
		</div>
	)
}

export default BoardComponent
