import React from "react";
import "../App.css";

export default function Card(props){

    return(
        <div className="card_container">
            <div className="img_container">
            <img className="cardImg" src={props.url} alt="picture"></img>
            </div>
            <div className="text_container">
            <h1 className="title">{props.title}</h1>
            <p className="explanation">Date: {props.date}</p>
            <p className="explanation">{props.explanation}</p>
            </div>
        </div>
    )
}