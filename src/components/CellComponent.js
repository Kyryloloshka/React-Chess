function CellComponent({ click, cell, selected }) {
	
	return (
		<div style={{ background: cell.available && cell.figure ? "green" : '' }} onClick={() => click(cell)} className={["cell", cell.color, selected ? 'selected' : ''].join(' ')}>
			{cell.available && !cell.figure && <div className="abailable"></div>}
			{cell.figure?.logo && <img className="" src={cell.figure.logo} alt="" />}
		</div>
	)
}

export default CellComponent
