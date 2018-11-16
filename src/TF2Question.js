import React, { Component } from 'react';

import TF2Answer from './TF2Answer';
import './css/TF2Item.css';

class TF2Question extends Component {
    render() {
        return (
            <div>
                <h2 className="tf2-item-question">Which attribute is missing?</h2>

                <TF2Answer id="answer-1" type="tf2-item-attr-negative" text="-100% damage penalty" />
                <TF2Answer id="answer-2" type="tf2-item-attr-positive" text="+25% damage bonus" />
                <TF2Answer id="answer-3" type="tf2-item-attr-negative" text="-25% clip size" />
                <TF2Answer id="answer-4" type="tf2-item-attr-positive" text="+40% projectile speed" />

                <button type="button" className="btn btn-outline-light mt-3" id="submit-button">Submit</button>
            </div>
        );
    }
}

export default TF2Question;