import React, { Component } from 'react';
import './css/TF2Item.css';

class TF2Score extends Component {
    render() {
        return (
            <div>
                <h2 className="tf2-score mr-2">Score: 1337</h2>
                <h2 className="tf2-score-add animated slideInUp">+1</h2>
            </div>
        );
    }
}

export default TF2Score;