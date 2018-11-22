import React, { Component } from 'react';
import { Preload } from 'react-preload';

import App from './App';
import { weapon_images } from './weapons';

import './css/PreloadResources.css';

class PreloadResources extends Component {
    render() {
        const loading = (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <i id="loading" class="fa fa-spinner fa-spin"></i>
            </div>
        );
        const images = [ // TODO: load a proper list
            "./img/logo.png",
            "./img/heavy-bg.png",
        ].concat(weapon_images);
        
        return (
            <Preload
                loadingIndicator={ loading }
                images={ images }
                autoResolveDelay={ 10000 }>
                <App />
            </Preload>
        );
    }
}

export default PreloadResources;