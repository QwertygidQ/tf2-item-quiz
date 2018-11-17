import React, { Component } from 'react';
import './css/TF2Item.css';

class TF2Score extends Component {
    render() {
        return (
            <div>
                <h2 className="tf2-score mr-2">Score: { this.props.score }</h2>
                <div className="tf2-score-add animated fadeIn">
                    <h2 className="animated slideInUp">+1</h2>
                </div>
            </div>
        );
    }
}

export default TF2Score;