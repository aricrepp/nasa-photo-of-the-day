import React, {useEffect, useState, Coponent} from "react";
import axios from "axios";
import CardContainer from "./Components/Card_Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand
} from "reactstrap";

function App() {

  const [Apod, setApod] = useState([]);
  const [day, setDay] = useState(new Date());
  const [ogDate, setDate] = useState('2012-04-15');


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=aYxd3GuYOUk6bPiApkAZE0oACNbiwaxqaOi9GOzD&date=${moment(day).format('YYYY-MM-DD')}`)
    .then(response => {
        setApod(response.data);
    })
    .catch(err => {
        console.log(err);
    })
}, [day])

  return (
    <div className="App">
        <Navbar color="dark" className="navbar"><NavbarBrand href="/">IMAGE OF THE DAY</NavbarBrand></Navbar>
        <CardContainer day={day} setDay={setDay} date={ogDate} setDate={setDate} url={Apod.hdurl} title={Apod.title} date={Apod.date} explanation={Apod.explanation} mediaType={Apod.mediaType}/>
    </div>
  );
}

export default App;
