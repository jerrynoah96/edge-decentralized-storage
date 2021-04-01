import React from 'react';
import '../App.css';

const ProgressBar = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="circles">
					<div className="yellow-circle"></div>
					<div className="yellow-circle"></div>
					<div className="yellow-circle"></div>

				</div>
			<div className="progress-done" style={style}>
				
				
				
			</div>
		</div>
	)
}

export default ProgressBar;