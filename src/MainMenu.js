import React, { Component } from 'react';

import './css/Menu.css';
import './css/MainMenu.css';
import './css/TF2Item.css';

class MainMenu extends Component {
    render() {
        return (
            <div className="menu">
                <img id="logo" src={ require("./img/logo.png") } alt="TF2 Item Quiz" />
                <button type="button" className="btn btn-outline-light btn-block mt-5" onClick={ this.props.onGameStart }>Start the Quiz</button>
                <form action="https://github.com/QwertygidQ/tf2-item-quiz" className="mt-2">
                    <button type="submit" className="btn btn-outline-light btn-block">Github</button>
                </form>
                <button type="button" className="btn btn-outline-light btn-block mt-2" onClick={ this.props.onCredits }>Credits</button>
            </div>
        );
    }
}

export default MainMenu;