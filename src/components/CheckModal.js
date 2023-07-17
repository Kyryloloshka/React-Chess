import { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'



function CheckModal({ classes, onClose: handleClose }) {
	const ref = useRef()
	const contentRef = useRef()
	useEffect(() => {
		setTimeout(animate)
		setTimeout(close, 500)
	})

	function close() {
		animate(true);
		setTimeout(handleClose, 500)
	}

	function animate(isClosing = false) {
		ref.current.classList.toggle("opacity-0", isClosing)
	}

	return ReactDOM.createPortal(
		<div className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 duration-500 transition-opacity" ref={ref}>
			<div ref={contentRef} className={`relative flex flex-col text-white rounded-xl duration-500 ${classes}`}>
				<h2 className='text-[50px] tracking-widest'>Check</h2>
			</div>
		</div>,
		document.body
	)
}


export default CheckModal;
