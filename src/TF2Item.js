import React, { Component } from 'react';

import './css/TF2Item.css';

class TF2Item extends Component {
    render() {
        let item = this.props.item;

        return (
            <div className="card tf2-item-card">
                <div className="card-body">
                    <div className="tf2-item">
                        <img className="tf2-item-image mb-1" src={ item.img } alt={ item.name }/>
                        <br/>
                        <span className="tf2-item-name">{ item.name }</span>
                        <br/>
                        <span className="tf2-item-attr tf2-item-attr-level">{ item.level }</span>
                        { item.attrs.map(
                            function (out_object, i) {
                                if (this.props.question.type === "missing_attr" && i === this.props.question.missing_attr_id)
                                    return <span key={ "missing" }></span>;
                                let splits = out_object.text.split('\n').map(
                                    (object, j) => (
                                        <div key={ ("" + i) + (" " + j) } className="tf2-item-attr-div">
                                            <br/>
                                            <span className={"tf2-item-attr tf2-item-attr-" + out_object.type}>
                                                { object }
                                            </span>
                                        </div>
                                    )
                                );
                                return splits;
                            }, this) }
                    </div>
                </div>
            </div>
            
        );
    }
}

export default TF2Item;