import React, { Component } from 'react';

import './css/Menu.css';
import './css/TF2Item.css';

class GameOverMenu extends Component {
    render() {
        return (
            <div className="menu">
                <h1 className="tf2-logo">Game Over!</h1>
                <h2 className="tf2-score">Score: { this.props.score }</h2>
                <br/>
                <button type="button" className="btn btn-outline-light mb-2" onClick={ this.props.onGameStart }>Try Again</button>
                <br/>
                <button type="button" className="btn btn-outline-light" onClick={ this.props.onMainMenu }>Back to Main Menu</button>
            </div>
        );
    }
}

export default GameOverMenu;