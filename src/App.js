import React, {Component} from 'react';
import ImageList from './components/ImageList/ImageList';
import SearchBar from './components/SearchBar/SearchBar';
import NoResults from './components/NoResults/NoResults';
import {Footer,LoadMore} from './components/Footer/Footer';
import unsplash from './components/UnsplashAPI/UnsplashAPI';
import './App.css';

export default class App extends Component {
	state = {
		images: [],
		input:'random',
		isLoading: false,
		page: 1,
		error_msg: ''
	};

	componentDidMount() {
		this.loadImages();
	}

	componentDidUpdate(prevProps,prevState) {
		if (prevState.page !== this.state.page) {
			this.loadImages();
		}
	}

	loadImages = async () => {
		try {
		const {input,page} = this.state;
		// console.log(input,page)

		this.setState({isLoading: true})
		const response = await unsplash.get('/search/photos', {
			params: {query : `${input}`,page: `${page}`,per_page:20},
		});

		this.setState((prevState) => ({
			images: [...prevState.images,...response.data.results],
			errorMsg: ''
		}));	

		} catch(error) {
			this.setState({
				errorMsg: 'Error while loading data. Try again later.'
			});
		} finally {
			this.setState({isLoading: false});
		}
	};



	loadMore = () => {
		this.setState((prevState) => ({
			page: prevState.page + 1
		}));
		// console.log(this.state.input)
	};

	onInputChange = (event) => {
		// console.log('query: ',event.target.value)
		if (event.target.value.trim().length > 0) {
			this.setState({input: event.target.value})}
		else {
			this.setState({input:'random',page:1})
		}
	}

	onButtonSubmit = () => {
		this.setState({images: [],page: 1})
		this.loadImages();
	}

	render() {
		const {images,isLoading,errorMsg} = this.state;

		return (
			<div>
				<SearchBar onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
				{this.state.input==='random' && <button className="button is-large is-dark is-focused random">Random</button>}
				{((this.state.input.length && !this.state.images.length) && !this.state.isLoading) && <NoResults text={'No results found.'}/>}
				{isLoading && <progress className="progress is-medium is-primary" max="100"></progress>}
				<ImageList images={images}/>
				{errorMsg && <NoResults text = {'An Error has Occured. Please notify the website adminstrator. \n Error Details:' + errorMsg}/>}
				{this.state.images.length>0 && <LoadMore isLoading={isLoading} loadMore={this.loadMore}/>}
				<Footer/>
			</div>
		);
	}
}