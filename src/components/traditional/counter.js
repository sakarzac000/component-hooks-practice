import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }

        this.handleUp = this.handleUp.bind(this)
        this.handleDown = this.handleDown.bind(this)
    }

    handleUp() {
        let newCount = this.state.count + 1;

        this.setState({
            count: newCount
        })
    }

    handleDown() {
        let newCount = this.state.count - 1;

        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div style={{width: "40%", display: 'flex', flexDirection: 'column'}}>
                <button onClick={this.handleUp}>Up</button>
                <h1 style={{textAlign: 'center'}}>{this.state.count}</h1>
                <button onClick={this.handleDown}>Down</button>

                <hr style={{margin: '20px 0px'}}></hr>
            </div>
        )
    }
}