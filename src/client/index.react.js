import React from 'react';
import ReactDOM from 'react-dom';
import App from 'client/app.react';
import { Provider } from 'mobx-react';
import common from 'client/stores/common';
import auth from 'client/stores/auth';
import { BrowserRouter as Router } from 'react-router-dom';

const stores = {
    common,
    auth
}

ReactDOM.render(
    <Router>
        <Provider {...stores}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
