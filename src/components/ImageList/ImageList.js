import React from 'react';
import ImageCard from '../ImageCard/ImageCard';


const ImageList = ({images}) => {	
	return (
		<div>
			<div className="columns is-multiline mx-6">
			{ 
				images && (images.map((image) => {return <ImageCard key={image.id} url={image.urls.regular}/>}))
			}
			</div>
		</div>
	);
};


export default ImageList;