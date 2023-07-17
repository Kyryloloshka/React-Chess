import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom'
import useEvent from "../hooks/useEvent";

function BaseModal({ classes, onClose: handleClose, children }) {
	const ref = useRef()
	const contentRef = useRef()
	useEffect(() => {
		setTimeout(animate)
	})
	useEvent('keydown', handleEsc)

	function handleEsc({ key }) {
		if (key === 'Escape') close()
	}

	function close() {
		animate(true);
		setTimeout(handleClose, 500)
	}

	function animate(isClosing = false) {
		ref.current.classList.toggle("opacity-0", isClosing)
		contentRef.current.classList.toggle("-translate-y-10", isClosing)
	}

	return ReactDOM.createPortal(
		<div className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 duration-500 transition-opacity" ref={ref} role='dialog' onClick={close}>
			<div ref={contentRef} onClick={(event) => event.stopPropagation()} className={`relative flex flex-col text-white rounded-xl -translate-y-10 transition-transform duration-500 ${classes}`}>
				<button onClick={close} className="absolute right-0 p-3 text-neutral-500 transition-colors hover:text-neutral-200">
					<XMarkIcon className="h-8 w-8" />
				</button>
				{children}
			</div>
		</div>,
		document.body
	)
}


export default BaseModal;
