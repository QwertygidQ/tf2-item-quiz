import React, { Component } from 'react';

import TF2Answer from './TF2Answer';
import './css/TF2Item.css';


class TF2Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correct_checked: false
        }

        this.onRadioStateChange = this.onRadioStateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onRadioStateChange(e) {
        let label = e.currentTarget.labels.item(0).textContent;
        this.setState({
            correct_checked: label === this.props.question.missing_attr_text
        });
    }

    onSubmit(e) {
        alert(this.state.correct_checked);
    }

    render() {
        if (this.props.question.type === "missing_attr")
            return (
                <div>
                    <h1 className="tf2-item-question">Which attribute is missing?</h1>
                    { this.props.question.answers.map(function(object, i) {
                        return <TF2Answer
                                key={ i }
                                id={ "answer-" + (i + 1) }
                                type={ object.positive ? "tf2-item-attr-positive" : "tf2-item-attr-negative" }
                                text={ object.text }
                                onStateChange={ this.onRadioStateChange }/>
                    }, this) }

                    <button type="button" className="btn btn-outline-light mt-3" id="submit-button" onClick={ this.onSubmit }>Submit</button>
                </div>
            );
        else
            return <div></div>;
    }
}

export default TF2Question;
