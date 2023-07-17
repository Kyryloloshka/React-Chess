function BaseButton({ classes, onClick: handleClick, children: label }) {
	let typeClasses = 'bg-[#336989] py-1 px-5'

	return (
		<button className={`button font-semibold rounded-full hover:scale-105 ${typeClasses} ${classes}`} onClick={handleClick}>
			{label}
		</button>
	)
}


export default BaseButton;
