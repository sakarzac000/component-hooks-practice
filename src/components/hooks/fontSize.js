import React, { useState } from 'react';

export default function fontSize() {


    const [size, setSize] = useState(12)

    return (
        <div style={{width: '40%'}}>

            <button onClick={() => setSize(size + 1)}>Up</button>

            <h1 
            style={{fontSize: `${size}px`}}
            >{size}px</h1>

            <button onClick={() => setSize(size - 1)}>Down</button>

            <hr style={{margin: '20px 0px'}}></hr>

        </div>
    )

}