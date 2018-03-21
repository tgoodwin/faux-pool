import React from 'react';

class Header extends React.Component {
	render() {
		const title = 'FAUX POOL';
		return (
			<div className='nav-bar'>
				<div className='header'>{title}</div>
				<div className='righty'>About</div>
				<div className='righty'>Shop</div>
			</div>
		);
	}
}

export default Header;