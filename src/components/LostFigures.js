
function LostFigures({ classes, title, figures }) {
	return (
		<div className={`absolute flex gap-1 items-center ${classes}`}>
			<h3 className="mr-3">{title}</h3>
			{figures.map(figure =>
				<div key={figure.id}>
					{figure.logo && <img className="h-[18px]" src={figure.logo} alt='' />}
				</div>
			)}
		</div>
	)
}


export default LostFigures
