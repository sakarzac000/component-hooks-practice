import React, { useState } from 'react';

export default function Counter() {

    const [upOrDown, setUpOrDown] = useState(0)


    return (
        <div style={{width: "40%", display: 'flex', flexDirection: 'column'}}>
            <button onClick={() => setUpOrDown(upOrDown + 1)}>Up</button>
            <h1 style={{textAlign: 'center'}}>{upOrDown}</h1>
            <button onClick={() => setUpOrDown(upOrDown - 1) }>Down</button>

            <hr style={{margin: '20px 0px'}}></hr>
        </div>
    )
}