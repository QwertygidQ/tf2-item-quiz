import React, { Component } from 'react';

class MainMenu extends Component {
    render() {
        return (
            <button type="button" className="btn btn-outline-light" onClick={ this.props.onGameStart }>Start the quiz</button>
        );
    }
}

export default MainMenu;