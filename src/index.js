import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/sass/index.scss';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Route path={process.env.PUBLIC_URL + '/'} basename={process.env.PUBLIC_URL} component={App}/>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
