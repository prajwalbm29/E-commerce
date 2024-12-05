import React from "react";
import './item.css'

function Item(props) {
    return (
        <div className="item">
            <img src={props.image} alt="prop image" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item