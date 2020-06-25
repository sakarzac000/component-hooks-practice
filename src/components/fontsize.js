import React, { Component } from 'react';

export default class FontSize extends Component {
    constructor() {
        super()

        this.state = {
            fontSize: 12
        }

        this.handleUp = this.handleUp.bind(this)
        this.handleDown = this.handleDown.bind(this)
    }

    handleUp() {
        let newFontSize = this.state.fontSize + 1
        this.setState({
            fontSize: newFontSize
        })
    }

        handleDown() {
        let newFontSize = this.state.fontSize - 1
        this.setState({
            fontSize: newFontSize
        })
    }

    render() {
        return (
            <div style={{width: '40%'}}>

                <button onClick={this.handleUp}>Up</button>

                <h1 
                style={{fontSize: `${this.state.fontSize}px`}}
                >{this.state.fontSize}px</h1>

                <button onClick={this.handleDown}>Down</button>

                <hr style={{margin: '20px 0px'}}></hr>

            </div>
        )
    }
}