import BaseModal from "./BaseModal";

function ModalTimeOver({ whiteTime, onClose: handleClose }) {
	return (
		<BaseModal classes={'bg-[#161515] h-80 w-[480px]'} onClose={handleClose}>
			<h2 className="text-4xl justify-center flex py-8">{(whiteTime === 0 ? "Чорні" : "Білі")} перемогли</h2>
			<hr />
			<div className="text-2xl justify-center flex py-7">Час у {(whiteTime === 0 ? "білих" : 'чорних')} вичерпано</div>
		</BaseModal>
	)
}


export default ModalTimeOver;
