import React, { Component } from 'react';

export default class AlignMe extends Component {
    constructor() {
        super();

        this.state = {
            align: ""
        }

        this.handleAlignCenter = this.handleAlignCenter.bind(this)
        this.handleAlignLeft = this.handleAlignLeft.bind(this)
        this.handleAlignRight = this.handleAlignRight.bind(this)
    }

    handleAlignLeft() {
        this.setState({
            align: "left"
        })
    }

    handleAlignCenter() {
        this.setState({
            align: "center"
        })
    }

    handleAlignRight() {
        this.setState({
            align: "right"
        })
    }

    render() {
        return (
            <div style={{width: '40%'}}>
                <h1 
                style={{textAlign: this.state.align
                }}>
                Align Me!
                </h1>

                <div style={{textAlign: "center"}}>
                    <button
                    onClick={this.handleAlignLeft}
                    >Left</button>

                    <button
                    onClick={this.handleAlignCenter}
                    >Center</button>

                    <button
                    onClick={this.handleAlignRight}
                    >Right</button>
                </div>

                <hr style={{marginTop: '20px'}}></hr>

            </div>
        )
    }
}