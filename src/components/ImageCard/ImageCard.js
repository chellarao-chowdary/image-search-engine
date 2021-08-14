import React from 'react';

const ImageCard = ({url}) => {
	return (
		<div className="column is-one-quarter grow">
			<div className="card">
        		<div className="card-image">
            		<figure className="image is-3by2">
            			<a href={url} target="_blank" rel="noopener noreferrer">
              			<img src={`${url}`} alt="Unsplash"/>
              			</a>
            		</figure>
        		</div>
    		</div>
    	</div>
	);
};

export default ImageCard;