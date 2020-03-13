import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

//custom CSS
import "./index.css"

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


function TrafficLight(props){
    return(
            <div className="container">
                <div className="redlight" id="red"></div>
                <div className="yellowlight" id="yellow"></div>
                <div className="greenlight" id="green"></div>
            </div>
            )
    }
 

ReactDOM.render(<TrafficLight />, document.querySelector("#root"));