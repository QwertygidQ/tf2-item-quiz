import React, { Component } from 'react';
import shuffle from 'shuffle-array';

import TF2Item from './TF2Item';
import TF2Question from './TF2Question';
import getRandomInt from './random';
import './css/MainMenu.css';

const weapons = [
    {
        name: "The Rocket Jumper",
        tfclass: "Soldier",
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
                text: "Wearer cannot carry the intelligence briefcase \nor PASS Time JACK"
            }
        ]
    },
    {
        name: "The Direct Hit",
        tfclass: "Soldier",
        img: require("./img/direct_hit.png"),
        level: "Level 1 Rocket Launcher",
        attrs: [
            {
                positive: true,
                text: "+25% damage bonus"
            },
            {
                positive: true,
                text: "+80% projectile speed"
            },
            {
                positive: true,
                text: "Mini-crits targets launched airborne by \nexplosions, grapple hooks or rocket \npacks."
            },
            {
                positive: false,
                text: "-70% explosion radius"
            }
        ]
    },
    {
        name: "The Cow Mangler 5000",
        tfclass: "Soldier",
        img: require("./img/cow_mangler.png"),
        level: "Level 30 Focused Wave Projector",
        attrs: [
            {
                positive: true,
                text: "Does not require ammo"
            },
            {
                positive: true,
                text: "Alt-Fire: A charged shot that \nmini-crits players, sets them on fire \nand disables buildings for 4 sec"
            },
            {
                positive: false,
                text: "No random critical hits"
            },
            {
                positive: false,
                text: "Deals only 20% damage to buildings"
            },
            {
                positive: false,
                text: "Minicrits whenever it would normally \ncrit"
            }
        ]
    }
];

class MainMenu extends Component {
    constructor(props) {
        super(props);

        const question_types = ["missing_attr"];
        const question_amount = 4;

        let next_question = question_types[getRandomInt(0, question_types.length - 1)];

        let next_item_id = getRandomInt(0, weapons.length - 1);
        let next_item = weapons[next_item_id];
        let next_missing_attr_id = getRandomInt(0, next_item.attrs.length - 1);

        let next_answers = [next_item.attrs[next_missing_attr_id]];
        if (next_question === "missing_attr") {
            for (; next_answers.length < question_amount;) {
                let question_item_id = getRandomInt(0, weapons.length - 1);
                if (question_item_id === next_item_id)
                    continue;

                let question_item = weapons[question_item_id];

                let attr_item = question_item.attrs[getRandomInt(0, question_item.attrs.length - 1)];
                if (next_answers.includes(attr_item))
                    continue;

                next_answers.push(attr_item);
            }
        }
        shuffle(next_answers);

        this.state = {
            score: 0,
            current_weapon: next_item_id,
            question: {
                type: next_question,
                missing_attr_id: next_missing_attr_id,
                answers: next_answers
            }
        }
    }

    render() {
        return (
            <div id="outer" className="h-100 d-flex justify-content-center align-items-center">
                <div className="card animated bounceInDown tf2-main mx-4">
                    <div className="card-body">
                        <div className="row m-2">
                            <div className="column mr-4">
                                <TF2Item item={ weapons[this.state.current_weapon] } question={ this.state.question } />
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