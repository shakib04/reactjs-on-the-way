import React, { Component } from 'react'

class FootballScore extends Component {

    constructor(props) {
        super();
        this.state = {
            counting : 0
        }
    }

    increasing = () => {
        
        this.setState({
            counting: this.state.counting + 1
        })
    }

    decreasing = () => {
        this.setState({
            counting : this.state.counting - 1
        })
    }

    render() {
        const { counting } = this.state;
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h3>Count: {counting}</h3>
                <button onClick={this.increasing} disabled={counting === 7 ? true : false}>+</button>
                <button onClick={this.decreasing} disabled={counting === 0 ? true : false}>-</button>
            </div>

        )
    }
}

export default FootballScore;