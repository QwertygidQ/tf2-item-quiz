import React, { Component } from 'react';

import TF2Item from './TF2Item';
import TF2Question from './TF2Question'
import './css/MainMenu.css';

const weapons = {
    "The Rocket Jumper": {
        name: "The Rocket Jumper",
        img: require("./img/rocket_jumper.png"),
        level: "Level 1 Rocket Launcher",
        attrs: [
            {
                positive: true,
                text: "+200% max primary ammo on wearer"
            },
            {
                positive: true,
                text: "No self inflicted blast damage taken"
            },
            {
                positive: false,
                text: "-100% damage penalty"
            },
            {
                positive: false,
                text: "No random critical hits"
            },
            {
                positive: false,
                text: "Wearer cannot carry the intelligence briefcase\nor PASS Time JACK"
            }
        ]
    }
};

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            current_weapon: "The Rocket Jumper",
            missing_attr: 2
        }
    }

    render() {
        return (
            <div id="outer" className="h-100 d-flex justify-content-center align-items-center">
                <div className="card animated bounceInDown tf2-main mx-4">
                    <div className="card-body">
                        <div className="row m-2">
                            <div className="column mr-4">
                                <TF2Item item={ weapons[this.state.current_weapon] } missing_attr={ this.state.missing_attr } />
                            </div>
                            <div className="column">
                                <TF2Question />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;