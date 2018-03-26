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
					<img src='/images/flower.jpg'></img>
				</div>
				<div className='product-title'>Music Lover Sticker</div>
				<div className='product-text'>
					Inkjet on weatherproof vinyl. 1.5" x 5.5". Edition of 100.
				</div>
				<div className='purchase-btn'>
					<a href="http://fauxpool.bigcartel.com">
						PURCHASE
					</a>
				</div>
			</div>			
		);
		var aboutPage = (
			<div className='page'>
				<div className='section-title'>INFORMATION</div>
				<img src='/images/trash.jpg'></img>
				<div className='product-text'>
					Debris recovery from the Great Pacific Trash Vortex <span className='bigger'>|</span> VSCO C1
				</div>
					<div className='product-title'>
						Faux Pool is a lifestyle brand based in NYC.
						<br/><br/>
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