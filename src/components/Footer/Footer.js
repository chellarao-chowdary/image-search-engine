import React from 'react'

const Footer = () => {
	return (
		<footer className="footer">
  			<div className="content has-text-centered">
      			<strong>Copyright © Chellarao Chowdary 2021 </strong>
      			<br></br>
      				<a className="link hover-black inline-flex items-center ma2 tc br2 pa2 grow" href={"https://github.com/chellarao-chowdary"} title="GitHub" target="_blank" rel="noopener noreferrer">
		      			<svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
		      				<span className="f6 ml3 pr2">GitHub</span>
		    		</a>
  			</div>
		</footer>
	)
}
const LoadMore = ({isLoading,loadMore}) => {
	return (
		<div className="is-flex is-justify-content-center mt4">
			<button className="grow button is-dark is-large is-hovered"
			onClick={loadMore}>
				{isLoading ? 'Loading...' : 'Load more'}
			</button>
		</div>
	)
}

export {Footer,LoadMore};