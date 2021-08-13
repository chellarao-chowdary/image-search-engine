import React, {Component} from 'react';
import ImageCard from '../ImageCard/ImageCard';


class ImageList extends Component {
	
	render() {
		
		return (
			<div>
				<div className="columns is-multiline mx-6">
				{ this.props.isHome ?
					(this.props.images.map((image) => {return <ImageCard key={image.id} url={image.url}/>}))
					:
					(this.props.images.map((image) => {return <ImageCard key={image.id} url={image.urls.regular}/>}))

				}
				</div>
			</div>

		);
	}
};


export default ImageList;
