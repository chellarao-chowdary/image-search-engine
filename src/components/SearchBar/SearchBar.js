import React from 'react';
import './SearchBar.css';

const SearchBar = ({onInputChange,onButtonSubmit}) => {
	return (
		<div className='is-flex is-justify-content-center mv6'>
			<input
				className="input shadow-5 is-large is-medium box" 
				type="text" 
				placeholder="Search for photos"
				onChange={onInputChange}/>
			<button 
				className="grow button is-dark is-large is-hovered ml4 button2" 
				type="submit" onClick={onButtonSubmit}>
				🔍
			</button>
		</div>
	);
}

export default SearchBar;