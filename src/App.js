import { useEffect, useState } from 'react';
import './App.css';

import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import useModal from './hooks/useModal';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

function App() {
	const [board, setBoard] = useState(new Board())
	const [whitePlayer] = useState(new Player(Colors.WHITE))
	const [blackPlayer] = useState(new Player(Colors.BLACK))
	const [currentPlayer, setCurrentPlayer] = useState(null)
	const modalCheck = useModal()
	const [classesPointerNone, setClassesPointerNone] = useState('')
	function isPointerNone(classes) {
		setClassesPointerNone(classes)
	}
	useEffect(() => {
		restart()
	}, [])

	function restart() {
		setClassesPointerNone('')
		setCurrentPlayer(whitePlayer)
		const newBoard = new Board();
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	function swapPlayer() {
		setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
	}

	return (
		<div className="app px-[15px] flex flex-col gap-3 py-1 justify-center items-center">
			<Timer isPointerNone={isPointerNone} restart={restart} currentPlayer={currentPlayer}>
				<LostFigures
					classes={'top-9 left-2'}
					title="Гравець 1"
					figures={board.lostWhiteFigures}
				/>
				<BoardComponent
					modalCheck={modalCheck}
					board={board}
					setBoard={setBoard}
					currentPlayer={currentPlayer}
					swapPlayer={swapPlayer}
					classesPointerNone={classesPointerNone}
				/>
				<LostFigures
					classes={'bottom-2 left-2'}

					title="Гравець 2"
					figures={board.lostBlackFigures}
				/>
			</Timer>


		</div>
	);
}

export default App;
