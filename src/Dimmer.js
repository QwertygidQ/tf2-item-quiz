import React, { Component } from 'react';

import './css/Dimmer.css';

class Dimmer extends Component {
    render() {
        let correct = (this.props.correct === "true");
        return (
            <div id={ correct ? "correct-dimmer" : "incorrect-dimmer" }>
                <i id={ correct ? "correct-dimmer-tick" : "incorrect-dimmer-cross" } className={ correct ? "fa fa-check" : "fa fa-times"}></i>
            </div>
        );
    }
}

export default Dimmer;