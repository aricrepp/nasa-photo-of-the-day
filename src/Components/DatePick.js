import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Button
  } from "reactstrap";

export default function DatePick(props) {
    return(
        <div className="dayPicker">
            <DatePicker
                selected={props.day}
                onChange={date => props.setDay(date)}
                maxDate={new Date()}
                customInput={
                <Button color="success">Pick a Day</Button>
                }
                disaBledKeyboardNavigation
                withPortal
            />
        </div>
        
    );
}