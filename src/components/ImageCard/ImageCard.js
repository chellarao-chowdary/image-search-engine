import React, {Component} from 'react';

class ImageCard extends Component {
	render() {
		const {url} = this.props;
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
	}
}
export default ImageCard;

			// <div className='br3 pa3 ma4 grow bw2 shadow'>
			// <img alt='Unsplash' src={`${url}`} width="350" height= "250"/>
			// </div>