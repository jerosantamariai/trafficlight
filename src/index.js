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

class TrafficLight extends React.Component {
    constructor() {
        super();
        this.state = {
            onred: 0,
            onyellow: 0,
            ongreen: 0,

        }
    }

    changeLight = (e) => {
        if (e.target.id == "red" && this.state.onred === 0) {
            e.target.classList.remove("alert-danger");
            e.target.classList.add("bg-danger")
            this.setState({
                onred: 1
            })
         } else if (
            e.target.id == "red" && this.state.onred === 1){
            e.target.classList.add("alert-danger");
            e.target.classList.remove("bg-danger")
            this.setState({
                onred: 0
            })
            }

        if (e.target.id == "yellow" && this.state.onyellow === 0) {
            e.target.classList.remove("alert-warning");
            e.target.classList.add("bg-warning")
            this.setState({
                onyellow: 1
            })
        } else if (e.target.id == "yellow" && this.state.onyellow === 1){
            e.target.classList.add("alert-warning");
            e.target.classList.remove("bg-warning")
            this.setState({
                onyellow: 0
            })
        }

        if (e.target.id == "green" && this.state.ongreen === 0) {
            e.target.classList.remove("alert-success");
            e.target.classList.add("bg-success")
            this.setState({
                ongreen: 1
            })
        } else if (e.target.id == "green" && this.state.ongreen === 1){
            e.target.classList.add("alert-success");
            e.target.classList.remove("bg-success")
            this.setState({
                ongreen: 0
            })
        }


    }


    render() {
        return (
            <div className="container">
                <div className={" alert-danger redLight"}  onClick={this.changeLight} id="red"></div>
                <div className={" alert-warning yellowLight"} onClick={this.changeLight} id="yellow"></div>
                <div className={" alert-success greenLight"} onClick={this.changeLight} id="green"></div>
            </div>
        )
    }
}


ReactDOM.render(<TrafficLight />, document.querySelector("#root"));