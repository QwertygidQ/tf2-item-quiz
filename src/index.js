import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './css/index.css';
import Dimmer from './Dimmer';
import PreloadResources from './PreloadResources';

ReactDOM.render(<Dimmer correct="false" />, document.getElementById('dimmers'));
ReactDOM.render(<PreloadResources />, document.getElementById('root'));

serviceWorker.unregister();
