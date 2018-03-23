import React from 'react';
import Header from './Header.jsx';
import ProductContainer from './ProductContainer.jsx';

class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<ProductContainer />
			</div>
		);
	}
}

export default Main;