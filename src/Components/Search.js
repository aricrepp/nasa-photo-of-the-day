import React from "react";
import "../App.css";

const Search = props => {

    return(
        <div className="search_container">
            <input 
            onKeyDown = {(e) =>{
                if(e.keyCode === 13){
                  if(e.target.value === ''){
                    alert("Please enter a date");
                    return
                  }
                  e.preventDefault();
                //   console.log(photo.toString());
                  props.setDate(e.target.value);
                  e.target.value = "";
                }
            }}
            className="search" 
            placeholder="Manual Search YYYY-MM-DD...">

            </input>
        </div>
    )
}

export default Search;