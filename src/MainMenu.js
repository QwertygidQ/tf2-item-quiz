import React, { Component } from 'react';
import shuffle from 'shuffle-array';

import { weapons } from './weapons'
import TF2Item from './TF2Item';
import TF2Question from './TF2Question';
import TF2Score from './TF2Score';
import getRandomInt from './random';
import './css/MainMenu.css';

class MainMenu extends Component {
    constructor(props) {
        super(props);

        const question_types = ["missing_attr"];
        const question_amount = 4;

        let next_question = question_types[getRandomInt(0, question_types.length - 1)];

        let next_item_id = getRandomInt(0, weapons.length - 1);
        let next_item = weapons[next_item_id];
        let next_missing_attr_id = getRandomInt(0, next_item.attrs.length - 1);

        let next_correct_answer = next_item.attrs[next_missing_attr_id];
        next_correct_answer["correct"] = true;

        let next_answers = [next_correct_answer];
        if (next_question === "missing_attr") {
            for (; next_answers.length < question_amount;) {
                let question_item_id = getRandomInt(0, weapons.length - 1);
                if (question_item_id === next_item_id)
                    continue;

                let question_item = weapons[question_item_id];

                let attr_item = question_item.attrs[getRandomInt(0, question_item.attrs.length - 1)];
                if (next_answers.filter(object => object.text === attr_item.text).length > 0)
                    continue

                attr_item["correct"] = false;
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
                missing_attr_text: next_correct_answer.text,
                answers: next_answers
            }
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(correct) {
        if (correct) {
            let new_state = this.state;
            new_state.score++;

            this.setState(new_state);
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
                            <div className="column mr-4">
                                <TF2Question question={ this.state.question } onSubmit={ this.onSubmit }/>
                            </div>
                            <div className="column">
                                <TF2Score score={ this.state.score }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;
