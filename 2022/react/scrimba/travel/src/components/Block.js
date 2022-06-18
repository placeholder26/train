import React from "react";

export default function Block(props){
    return(
        <div className="travelBlock">
            <img src={`../img/${props.img}.jpg`} alt={props.id} className="TblockImage" />
            <div>
                <h3>{props.location}</h3>
                <a href="#">click to find on google maps</a>
                <h2>{props.article}</h2>
                <h3>{props.date}</h3>
                <h4>{props.text}</h4>
            </div>
        </div>

    )
}