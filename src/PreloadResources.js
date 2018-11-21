import React, { Component } from 'react';
import { Preload } from 'react-preload';

import App from './App';

import './css/PreloadResources.css';

class PreloadResources extends Component {
    render() {
        const loading = (
            <div className="h-100 d-flex justify-content-center align-items-center">
                <i id="loading" class="fa fa-spinner fa-spin"></i>
            </div>
        );
        const images = [ // TODO: load a proper list
            "./img/chalkboard.png",
            "./img/cow_mangler.png",
            "./img/direct_hit.png",
            "./img/rocket_jumper.png",
        ];
        
        return (
            <Preload
                loadingIndicator={ loading }
                images={ images }
                autoResolveDelay={ 5000 }>
                <App />
            </Preload>
        );
    }
}

export default PreloadResources;