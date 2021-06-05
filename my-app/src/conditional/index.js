import React, { Component } from 'react';
import Login from './login';
import Home from './home';

export default class condIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogged: false,
            changedValue: 'dsadsad'
        }
    }

    changingText = (e) => {
        this.setState({
            changedValue: e.target.value
        });
        console.log(e.target.value);
    }

    render() {
        const { isLogged } = this.state;

        return (
            <div>
                {isLogged ? <Home /> : <Login />}
                <button id="logBtn" onClick={this.tryLogin}>Login</button>

                <input type="text" onChange={this.changingText} placeholder="Write here..." />
                <p>{this.state.changedValue} ss</p>
            </div>)
    }



    tryLogin = () => {

        if (this.state.isLogged) {
            this.setState({
                isLogged: false
            });
            document.querySelector("#logBtn").innerHTML = "login";
        } else {
            this.setState({
                isLogged: true
            });
            document.querySelector("#logBtn").innerHTML = "logout";
        }


        console.log(this.state.iamLogged);
    }
}