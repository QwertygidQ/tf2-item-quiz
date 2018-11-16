import React, { Component } from 'react';

import image from './img/rocket_jumper.png';
import './css/TF2Item.css';

class TF2Item extends Component {
    render() {
        return (
            <div className="tf2-item">
                <img className="tf2-item-image mb-1" src={ image } alt="The Rocket Jumper"/>
                <br/>
                <span className="tf2-item-name">The Rocket Jumper</span>
                <br/>
                <span className="tf2-item-attr tf2-item-attr-level">Level 1 Rocket Launcher</span>
                <br/>
                <span className="tf2-item-attr tf2-item-attr-positive">+200% max primary ammo on wearer</span>
                <br/>
                <span className="tf2-item-attr tf2-item-attr-positive">No self inflicted blast damage taken</span>
                <br/>
                <span className="tf2-item-attr tf2-item-attr-negative">No random critical hits</span>
                <br/>
                <span className="tf2-item-attr tf2-item-attr-negative">Wearer cannot carry the intelligence briefcase<br/>or PASS Time JACK</span>
            </div>
        );
    }
}

export default TF2Item;