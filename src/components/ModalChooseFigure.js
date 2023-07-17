import whiteLogoBishop from '../assets/wb.png'
import whiteLogoHorse from '../assets/wn.png'
import whiteLogoQueen from '../assets/wq.png'
import whiteLogoRook from '../assets/wr.png'
import { useRef, useEffect } from "react";
import ReactDOM from 'react-dom'
import { FigureNames } from '../models/figures/Figure';

function ModalChooseFigure ( { setWhatFigure, classes, onClose: handleClose } ) {


	const ref = useRef()
	const contentRef = useRef()
	useEffect( () => {
		setTimeout( animate )
	} )

	function close () {
		animate( true );
		setTimeout( handleClose, 500 )
	}

	function animate ( isClosing = false ) {
		ref.current.classList.toggle( "opacity-0", isClosing )
		contentRef.current.classList.toggle( "-translate-y-10", isClosing )
	}

	return ReactDOM.createPortal(
		<div className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 duration-500 transition-opacity" ref={ ref } role='dialog' >
			<div ref={ contentRef } className={ `relative flex flex-col text-white rounded-xl -translate-y-10 transition-transform duration-500 ${ classes }` }>
				<h2 className="text-4xl justify-center flex py-8">Виберить фігуру</h2>
				<div className="flex gap-10 justify-center h-[100%]">
					<button onClick={ () => { setWhatFigure( FigureNames.QUEEN ); close(); console.log( 'bak' ) } } type="button" className="flex justify-center items-center">
						<img className="h-[100px]" src={ whiteLogoQueen } alt="" />
					</button>
					<button onClick={ () => { setWhatFigure( FigureNames.ROOK ); close() } } type="button" className="flex justify-center items-center">
						<img className="h-[100px]" src={ whiteLogoRook } alt="" />
					</button>

					<button onClick={ () => { setWhatFigure( FigureNames.HORSE ); close() } } type="button" className="flex justify-center items-center">
						<img className="h-[100px]" src={ whiteLogoHorse } alt="" />
					</button>
					<button onClick={ () => { setWhatFigure( FigureNames.BISHOP ); close() } } type="button" className="flex justify-center items-center">
						<img className="h-[100px]" src={ whiteLogoBishop } alt="" />
					</button>

				</div>
			</div>
		</div>,
		document.body
	)
}


export default ModalChooseFigure;
