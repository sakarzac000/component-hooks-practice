import React, { Component } from 'react';
import Moment from 'moment'

export default class Clock extends Component {
    constructor() {
        super()

        this.state = {
            time: Moment().format('h:mm:ss')
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        time: Moment().format('h:mm:ss')
      });
    }

    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
            </div>
        )
    }
}