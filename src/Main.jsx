import React from 'react';
import { splitter } from './helper.js';

class Main extends React.Component {
	render() {
		const text = splitter('hello-world');
		return (
			<div>{text}</div>
		);
	}
}

export default Main;