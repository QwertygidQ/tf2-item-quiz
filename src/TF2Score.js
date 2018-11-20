import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './css/TF2Item.css';
import './css/Animations.css';

class TF2Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_scoreadd: false,
            set_visible: false
        }

        this.showScoreAdd = this.showScoreAdd.bind(this);
    }

    showScoreAdd() {
        this.setState({
            show_scoreadd: true,
            set_visible: true
        });
    }

    render() {
        return (
            <div className="">
                <h2 className="tf2-score mr-2">Score: { this.props.score }</h2>
                <CSSTransition
                    in={ this.state.show_scoreadd }
                    classNames="scoreadd"
                    timeout={ 400 }
                    onEntered={ () => this.setState({ show_scoreadd: false, set_visible: true }) }
                    onExited={ () => this.setState({ show_scoreadd: false, set_visible: false }) }>
                    <h2 className={ this.state.set_visible ? "tf2-score-add-visible" : "tf2-score-add-invisible" }>+1</h2>
                </CSSTransition>
            </div>
        );
    }
}

export default TF2Score;