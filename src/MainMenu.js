import React, { Component } from 'react';

import TF2Item from './TF2Item';
import TF2Question from './TF2Question'
import './css/MainMenu.css';

class MainMenu extends Component {
    render() {
        return (
            <div id="outer" className="h-100 d-flex justify-content-center align-items-center">
                <div className="card animated bounceInDown tf2-main mx-4">
                    <div className="card-body">
                        <div className="row m-2">
                            <div className="column mr-4">
                                <TF2Item />
                            </div>
                            <div className="column">
                                <TF2Question />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;