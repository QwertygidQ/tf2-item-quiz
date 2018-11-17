import React, { Component } from 'react';

class TF2Answer extends Component {
    render() {
        return (
            <div className="custom-control custom-radio">
                <input type="radio" id={ this.props.id } className="custom-control-input" name="answer" onChange={ this.props.onStateChange }/>
                <label className={"custom-control-label tf2-item-attr " + this.props.type } htmlFor={ this.props.id }>{ this.props.text }</label>
            </div>
        );
    }
}

export default TF2Answer;
