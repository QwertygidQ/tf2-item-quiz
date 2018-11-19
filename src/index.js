import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './css/index.css';
import Dimmer from './Dimmer';
import App from './App';

ReactDOM.render(<Dimmer correct="false" />, document.getElementById('dimmers'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
