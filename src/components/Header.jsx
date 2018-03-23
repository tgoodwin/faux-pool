import React from 'react';

class Header extends React.Component {
	render() {
		const title = 'faux pool';
		return (
			<div className='nav-bar'>
				<div className='header'>{title}</div>
			</div>
		);
	}
}

export default Header;