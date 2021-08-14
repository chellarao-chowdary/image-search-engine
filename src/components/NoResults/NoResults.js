import React from 'react';

const NoResults = ({text}) => {
	return (
		<div className="is-flex is-justify-content-center tc mt-6">
			<div className="column is-half notification is-info">
				{/*<button className="delete" onClick={onCross}></button>*/}
				{text}
			</div>
		</div>
	)
}

export default NoResults;