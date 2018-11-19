import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './css/index.css';
import Dimmer from './Dimmer';
import GameMenu from './GameMenu';

ReactDOM.render(<Dimmer correct="false" />, document.getElementById('dimmers'));
ReactDOM.render(<GameMenu />, document.getElementById('root'));

serviceWorker.unregister();
