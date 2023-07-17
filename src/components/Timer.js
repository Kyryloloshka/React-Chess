import { useState, useRef, useEffect } from 'react'
import useModal from '../hooks/useModal';
import ModalTimeOver from './ModalTimeOver'
import { Colors } from "../models/Colors";
import BaseButton from './BaseButton';
import { getPadTime } from '../helpers/getPadTime';

function Timer ( { isPointerNone, restart, currentPlayer, children } ) {
	const timeDefault = 600
	const overTimeModal = useModal()
	const [ time ] = useState( timeDefault )
	const [ blackTime, setBlackTime ] = useState( time )
	const [ whiteTime, setWhiteTime ] = useState( time )
	const [ isWasOpenModal, setIsWasOpenModal ] = useState( false )
	const timer = useRef( null )
	const minutesBlack = getPadTime( Math.floor( blackTime / 60 ) )
	const secondsBlack = getPadTime( blackTime - minutesBlack * 60 )
	const minutesWhite = getPadTime( Math.floor( whiteTime / 60 ) )
	const secondsWhite = getPadTime( whiteTime - minutesWhite * 60 )
	useEffect( () => {
		startTimer()

	}, [ currentPlayer ] )



	function startTimer () {

		if ( timer.current ) {
			clearInterval( timer.current )
		}
		const callback = currentPlayer?.color === Colors.WHITE ? decrementWhitePlayer : decrementBlackTimer
		timer.current = setInterval( callback, 1000 )

	}
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setTime((time) => time >= 1 ? time - 1 : 0)
	// 	}, 1000)
	// }, [])

	useEffect( () => {
		if ( ( whiteTime <= 0 || blackTime <= 0 ) && isWasOpenModal === false ) {
			overTimeModal.open()
			setIsWasOpenModal( true )
			clearInterval( timer.current )
			if ( whiteTime === 0 ) {
				isPointerNone( 'pointer-events-none' )
			} else if ( blackTime === 0 ) {
				isPointerNone( 'pointer-events-none' )
			}
		}
	} )

	function decrementBlackTimer () {
		setBlackTime( blackTime => blackTime >= 1 ? blackTime - 1 : 0 )
	}

	function decrementWhitePlayer () {
		setWhiteTime( whiteTime => whiteTime >= 1 ? whiteTime - 1 : 0 )
	}

	const handleRestart = () => {
		setBlackTime( time )
		setWhiteTime( time )
		restart()
	}

	return (
		<div className=' bg-[#911c1c] rounded-[6px] p-3 pb-2 pt-9 relative text-right text-white select-none'>
			<h2 className='pb-2'>Чорні - { minutesBlack } : { secondsBlack }</h2>
			{ children }
			<h2 className='pt-2'>Білі - { minutesWhite } : { secondsWhite }</h2>
			<div className="absolute top-1 left-1/2 translate-x-[-50%]">
				<BaseButton onClick={ handleRestart }>Почати з початку</BaseButton>
			</div>
			{ overTimeModal.isOpen && <ModalTimeOver blackTime={ blackTime } whiteTime={ whiteTime } onClose={ overTimeModal.close } /> }
		</div>
	)
}

export default Timer
