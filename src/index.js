import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';

// have to import every CSS file here
import './styles/main.scss';

ReactDOM.render(
    <div>
        <Main />
    </div>,
    document.getElementById('app')
);

module.hot.accept();