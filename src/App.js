import React, {useEffect, useState} from "react";
import axios from "axios";
// import NASACard from "./NASACard"
import "./App.css";

function App() {

  const [Apod, setApod] = useState([]);
  const [Date, setDate] = useState('2012-03-14');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=aYxd3GuYOUk6bPiApkAZE0oACNbiwaxqaOi9GOzD&date=${Date}`)
    .then(response => {
        // console.log(response.data)
        setApod(response.data);
    })
    .catch(err => {
        console.log(err);
    })
}, [])

  return (
    <div className="App">
      <div className="card">
        <div className="search_container">
          <input className="search" placeholder="Search Date YYYY-MM-DD..."></input>
        </div>
        <div className="img_container">
          <img className="cardImg" src={Apod.hdurl} alt="picture"/>
        </div>
        <div className="text_container">
          <h1 className="title">{Apod.title}</h1>
          <p className="explanation">Date: {Apod.date}</p>
          <p className="explanation">{Apod.explanation}</p>
         <p className="explanation">{Apod.copyright}</p>
        </div>
      </div>
      
    </div>

    
  );
}

export default App;
