import React from 'react';

const NoResults = () => {
	return (
		<div className="is-flex is-justify-content-center">
			<div className="column is-half notification is-info">
				<button className="delete"></button>
				No results found.
			</div>
		</div>
	)
}

const InvalidKeyword = ({onCross}) => {
	return (
		<div className="notification is-danger">
			<button className="delete" onClick={onCross}>
			</button>Please Enter a Valid Keyword</div>
	)
}
export {NoResults,InvalidKeyword};