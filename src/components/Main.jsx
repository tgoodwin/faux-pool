import React from 'react';
import Header from './Header.jsx';
import ProductContainer from './ProductContainer.jsx';

class Main extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Header />
				</div>
				<div>
					<ProductContainer />
				</div>
			</div>
		);
	}
}

export default Main;