import React, { Component } from 'react';

import TF2Answer from './TF2Answer';
import './css/TF2Item.css';

class TF2Question extends Component {
    render() {
        if (this.props.question.type === "missing_attr")
            return (
                <div>
                    <h2 className="tf2-item-question">Which attribute is missing?</h2>
                    { this.props.question.answers.map(function(object, i) {
                        return <TF2Answer
                                id={ "answer-" + (i + 1) }
                                type={ object.positive ? "tf2-item-attr-positive" : "tf2-item-attr-negative" }
                                text={ object.text } />
                    }) }

                    <button type="button" className="btn btn-outline-light mt-3" id="submit-button">Submit</button>
                </div>
            );
        else
            return <div></div>;
    }
}

export default TF2Question;