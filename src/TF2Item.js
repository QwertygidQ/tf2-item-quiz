import React, { Component } from 'react';

import './css/TF2Item.css';

class TF2Item extends Component {
    render() {
        let item = this.props.item;

        if (this.props.question.type === "missing_attr") {
            let missing_attr = this.props.question.missing_attr_id;
            item.attrs.splice(missing_attr, 1);
        }

        return (
            <div className="tf2-item">
                <img className="tf2-item-image mb-1" src={ item.img } alt={ item.name }/>
                <br/>
                <span className="tf2-item-name">{ item.name }</span>
                <br/>
                <span className="tf2-item-attr tf2-item-attr-level">{ item.level }</span>
                { item.attrs.map(
                    function (out_object, i) {
                        let splits = out_object.text.split('\n').map(
                            (object, i) => (
                                <div key={ i } className="tf2-item-attr-div">
                                    <br/>
                                    <span className={"tf2-item-attr " + (out_object.positive ? "tf2-item-attr-positive" : "tf2-item-attr-negative")}>
                                        { object }
                                    </span>
                                </div>
                            )
                        );
                        return splits;
                    }
                ) }
            </div>
        );
    }
}

export default TF2Item;