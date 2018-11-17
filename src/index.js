import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './css/index.css';
import MainMenu from './MainMenu';
import Dimmer from './Dimmer';

ReactDOM.render(<Dimmer correct="false" />, document.getElementById('dimmers'));
ReactDOM.render(<MainMenu />, document.getElementById('root'));

serviceWorker.unregister();
