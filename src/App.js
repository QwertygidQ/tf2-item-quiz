import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import MainMenu from './MainMenu';
import GameMenu from './GameMenu';

import './css/Animations.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transition_stage: "none"
        };

        this.onGameStart = this.onGameStart.bind(this);
    }

    componentDidMount() {
        this.setState({
            current_state: "Main",
            transition_stage: "state-enter",
        });
    }

    onGameStart() {
        this.setState({
            current_state: this.state.current_state,
            transition_stage: "state-exit",
            next_state: "Game"
        });
    }

    onGameOver() {
        this.setState({
            current_state: this.state.current_state,
            transition_stage: "state-exit",
            next_state: "Menu"
        });
    }

    render() {
        let state;
        switch (this.state.current_state)
        {
        case "Main":
            state = <MainMenu onGameStart={ this.onGameStart }/>;
            break;
        case "Game":
            state = <GameMenu />;
            break;
        default:
            state = <h1>Something went very wrong, refresh the page</h1>;
            break;
        }

        return (
            <div id="outer" className="h-100 d-flex justify-content-center align-items-center">
                <CSSTransition
                    in={ this.state.transition_stage === "state-enter" }
                    classNames="statechange"
                    timeout={ 1100 }
                    onExited={ () => {  // state change from "state-enter" to "state-exit"
                        this.setState({
                            current_state: this.state.next_state,
                            transition_stage: "state-enter" 
                        });
                    } }
                    unmountOnExit>
                    <div className="card tf2-main mx-4">
                        <div className="card-body">
                            { state }
                        </div>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default App;