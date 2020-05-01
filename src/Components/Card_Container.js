import React, {useState} from "react";
import Card from "./Card";
import Search from "./Search";
import DatePick from "./DatePick";
import "../App.css";

const CardContainer = props => {

    return(
        <div className="card_con">
            <Card url={props.url} title={props.title} date={props.date} explanation={props.explanation} mediaType={props.mediaType}/>
            <Search date={props.date} setDate={props.setDate}/>
            <DatePick day={props.day} setDay={props.setDay}/>
        </div>   
    );
}

export default CardContainer;