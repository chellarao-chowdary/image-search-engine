import React, {Component} from 'react';
import ImageList from './components/ImageList/ImageList';
import SearchBar from './components/SearchBar/SearchBar';
import {NoResults,InvalidKeyword}from './components/NoResults/NoResults';
import Footer from './components/Footer/Footer';
import unsplash from './components/UnsplashAPI/UnsplashAPI';
import './App.css';

const initialState = {
	input: '',
	isLoading: false,
	isHome: true,
	isKeyword: false,
	images: [],
	random_ig: []
}

for (let i=1;i<41;i++) {
	initialState.random_ig.push({"key": i,"url":`https://unsplash.it/350/250/?random&pic${i}`});
}

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onInputChange = async(event) => {
		if (event.target.value.trim().length > 0) {
			await this.setState({input: event.target.value,isKeyword:true})}
			else {
				this.setState({input:''});
			}
	}

	onButtonSubmit = async() => {
		this.setState({isLoading:true,isHome:false})
		if (!this.state.input) {
			await this.setState({isKeyword:false,isLoading:false,images:[]})
		} else {
		try {
		const response = await unsplash.get('/search/photos', {
			params: {query : this.state.input,per_page:40},
		});
		this.setState({images: response.data.results});
		this.setState({isLoading:false});
		} catch(e) {
			this.setState({images: []});
		}}
	}

	onCross = async() => {
		await this.setState({isKeyword:true});
	}
	
	render() {

		// const {isHome,images,random_ig} = this.state;

		return (
			<div>
				<SearchBar onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
				{
					(!this.state.isHome && !this.state.isKeyword) && <InvalidKeyword/>
				}
				{
					((!this.state.isHome && !this.state.images.length) && !this.state.isLoading) && <NoResults/>
				}
				{
					this.state.isHome && <button className="button is-large is-dark is-focused random">Random</button>
				}
				{this.state.isHome  ? 
					<ImageList images={this.state.random_ig} isHome={this.state.isHome}/>
					:<ImageList images={this.state.images} isHome={this.state.isHome}/>
				}
				<Footer/>
			</div>
		)
	};
}

export default App;