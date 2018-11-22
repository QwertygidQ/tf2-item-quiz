import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import './css/index.css';
import PreloadResources from './PreloadResources';

ReactDOM.render(<PreloadResources />, document.getElementById('root'));

serviceWorker.unregister();
