import React, { Component } from 'react';

import './css/Menu.css';
import './css/TF2Item.css';

class MainMenu extends Component {
    render() {
        return (
            <div className="menu">
                <h1 className="tf2-logo">TF2 Item Quiz</h1>
                <button type="button" className="btn btn-outline-light" onClick={ this.props.onGameStart }>Start the Quiz</button>
            </div>
        );
    }
}

export default MainMenu;