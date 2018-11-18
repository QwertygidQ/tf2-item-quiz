import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './css/TF2Item.css';
import './css/Animations.css';

class TF2Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_scoreadd: false
        }

        this.showScoreAdd = this.showScoreAdd.bind(this);
    }

    showScoreAdd() {
        this.setState({
            show_scoreadd: true
        });
    }

    render() {
        return (
            <div>
                <h2 className="tf2-score mr-2">Score: { this.props.score }</h2>
                <CSSTransition
                    in={ this.state.show_scoreadd }
                    classNames="scoreadd"
                    timeout={ 500 }
                    onEntered={ () => this.setState({ show_scoreadd: false }) }
                    unmountOnExit>
                    <h2 className="tf2-score-add">+1</h2>
                </CSSTransition>
            </div>
        );
    }
}

export default TF2Score;