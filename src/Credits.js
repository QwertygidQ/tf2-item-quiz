import React, { Component } from 'react';

import './css/Menu.css';
import './css/TF2Item.css';

class Credits extends Component {
    render() {
        return (
            <div className="menu">
                <h1 className="tf2-credits">Qwertygid, 2018</h1>
                <h1 className="tf2-credits">Special thanks to Revonine for helping with design.</h1>
                <h1 className="tf2-credits">All assets belong to Valve Corporation.</h1>
                <button type="button" className="btn btn-outline-light btn-block mt-2" onClick={ this.props.onMainMenu }>Back to Main Menu</button>
            </div>
        );
    }
}

export default Credits;