import React, { Component } from 'react';

export default class HideMe extends Component {
    constructor() {
        super()

        this.state = {
            visibility: "visible",
            buttonText: "Hide"
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        if (this.state.visibility == "visible") {
            this.setState({
                visibility: "hidden",
                buttonText: "Show"
            })
        }
        else {
            this.setState({
                visibility: "visible",
                buttonText: "Hide"
            })
        }
    }

    render() {
        return (
            <div style={{width: '40%'}}>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 
                    style={{
                    visibility: this.state.visibility,
                    textAlign: "center"
                    }}>Hide me!</h1>

                    <button onClick={this.handleToggle}
                    style={{textAlign: "center"}}
                    >{this.state.buttonText}</button>
                 </div>

                 <hr style={{marginBottom: '20px', marginTop: '20px'}}></hr>
            </div>
        )
    }
}