import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './css/index.css';
import Dimmer from './Dimmer';
import MainMenu from './MainMenu';

ReactDOM.render(<Dimmer correct="false" />, document.getElementById('dimmers'));
ReactDOM.render(<MainMenu />, document.getElementById('root'));

serviceWorker.unregister();
