import React, { useState } from 'react';

export default function hideMe() {

    const [visibility, setToggle] = useState('visible')

    return (
        <div style={{width: '40%'}}>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1 
                style={{
                visibility: visibility,
                textAlign: "center"
                }}>Hide me!</h1>

                <button onClick={visibility === "visible" ? () => setToggle("hidden") : () => setToggle('visible')}
                style={{textAlign: "center"}}
                >Toggle</button>
                </div>

                <hr style={{marginBottom: '20px', marginTop: '20px'}}></hr>
        </div>
    )
    
}