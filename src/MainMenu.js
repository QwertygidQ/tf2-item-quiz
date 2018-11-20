import React, { Component } from 'react';

import './css/Menu.css';
import './css/TF2Item.css';

class MainMenu extends Component {
    render() {
        return (
            <div className="menu">
                <h1 className="tf2-logo">TF2 Item Quiz</h1>
                <button type="button" className="btn btn-outline-light btn-block" onClick={ this.props.onGameStart }>Start the Quiz</button>
                <form action="https://github.com/QwertygidQ/tf2-item-quiz" className="mt-2">
                    <button type="submit" className="btn btn-outline-light btn-block">Github</button>
                </form>
            </div>
        );
    }
}

export default MainMenu;