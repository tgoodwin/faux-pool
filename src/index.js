import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx';

const title = 'My Minimal React Webpack Babel Setups';

ReactDOM.render(
  <div>
  	{title}
  	<Main />
  </div>,
  document.getElementById('app')
);

module.hot.accept();