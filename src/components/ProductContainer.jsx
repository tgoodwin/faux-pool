import React from 'react';
import classNames from 'classnames';

class ProductContainer extends React.Component {
	state = {
		selectedPage: 'shop'
	};
	handleClick = (e) => {
		this.setState({
			selectedPage: e.target.id
		});
	}
	render() {
		var productPage = (
			<div className='page'>
				<div className='section-title'>PRODUCT</div>
				<div className='img-container'>
					<img src='/images/sticker.jpg'></img>
					<div className='product-title'>8.3 or GTFO Sticker</div>
					<div className='product-text'>
						Inkjet on weatherproof vinyl. 1.5" x 5.5". Edition of 100.
					</div>
					<div className='purchase-btn'>
						<a href="http://fauxpool.bigcartel.com">
							PURCHASE
						</a>
					</div>
				</div>
			</div>			
		);
		var aboutPage = (
			<div className='page'>
				<div className='section-title'>INFORMATION</div>
				<div className='img-container'>
				<img src='/images/trash.jpg'></img>
				<div className='img-caption'>
					Debris recovery from Great Pacific Trash Vortex
				</div>
					<div className='product-title'>
						Faux Pool is a lifestyle brand based in NYC.
						<br/><br/>
					</div>
				</div>
				<div className='section-title'></div>
			</div>
		);
		const shopClass = classNames('nav-tab', 'left', {selected: this.state.selectedPage == 'shop'});
		const aboutClass = classNames('nav-tab', 'left', {selected: this.state.selectedPage == 'about'});
		return (
			<div className='products'>
				<div className='nav-container'>
					<div id='shop' className={shopClass} onClick={this.handleClick}>SHOP</div>
					<div id='about' className={aboutClass} onClick={this.handleClick}>ABOUT</div>
				</div>
				{this.state.selectedPage == 'shop' ? productPage : aboutPage}
				<div className='nav-bar'>
					<div className='copy'>&copy; {new Date().getFullYear()} faux pool</div>
				</div>
			</div>
		);
	}
}

export default ProductContainer;