import React, { useState, useEffect } from 'react';
import Moment from 'moment'

export default function clock() {
    // constructor() {
    //     super()

    //     this.state = {
    //         time: Moment().format('h:mm:ss')
    //     }
    // }

    // componentDidMount() {
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //       );
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    function tick() {
      setTime(
        Moment().format('h:mm:ss')
      );
    }

    const [time, setTime] = useState(Moment().format('h:mm:ss'))

    useEffect(() => {
        let timerId = setInterval(
            () => tick(), 1000
        )
    })

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}