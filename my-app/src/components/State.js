import React, { Component } from 'react';

export default class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            brasil: 2,
            ecuador: 0
        }
    }



    render() {
        const { brasil } = this.state;
        return (
            <div>
                State Js
                <h1>Brasil: {brasil}</h1>
                <h1>Ecuador: {this.state.ecuador}</h1>

                <div>
                    <button onClick={this.doIncrement} disabled={brasil === 7 ? true : false}>plus</button>
                    <button onClick={this.doDecrement} disabled={brasil === 0 ? true : false}>minus</button>
                </div>
            </div>
        )
    }

    doIncrement = () => {
        this.setState({
            brasil: this.state.brasil + 1
        });
        console.log("incriment");
    }

    doDecrement = () => {
        this.setState({
            brasil: this.state.brasil - 1
        });
        console.log("decriment");
    }
}