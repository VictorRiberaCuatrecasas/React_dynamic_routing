import React from 'react';
import {Link} from "react-router-dom";

function ItemCard(props){
    return(
         <div className="daily-upcoming-card">
            <Link style={{textDecoration: "none"}} to={`/shop/${props.id}`}>
                <div className="outside-daily-upcoming-img">
                    <div className="inside-daily-upcoming-img" style={{backgroundImage: `url(${props.image})`}} role="img" aria-label={props.name}></div>
                </div>
                <h3 className="text-center mt-2">{props.name}</h3>
            </Link>
        </div>
    )
}

export default ItemCard