import React, { Component } from 'react';

export default class ColorMe extends Component {
    constructor() {
        super()

        this.state = {
            fontColor: "black",
            text: "Color me!",
            colorInput: "",
            textInput: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        this.setState({
            fontColor: this.state.colorInput,
            text: this.state.textInput
        })

        event.preventDefault()
    }

    handleChange() {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div style={{width: '40%'}}>
                <form onSubmit={this.handleSubmit}>
                    <h1 style={{color: this.state.fontColor}}>{this.state.text}</h1>

                    <input 
                    type="text" 
                    placeholder="Color" 
                    name="colorInput"
                    value={this.state.colorInput}
                    onChange={this.handleChange}
                    ></input>

                    <input type="text" 
                    placeholder="Write here!" 
                    name="textInput"
                    value={this.state.textInput}
                    onChange={this.handleChange}
                    ></input>

                    <button>Submit</button>
                </form>

                <hr style={{margin: '20px 0px'}}></hr>
            </div>
        )
    }
}