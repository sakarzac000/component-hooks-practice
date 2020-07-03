import React, { useState } from 'react';

export default function alignMe() {

    const [alignment, updateAlignment] = useState("left")

    const changeAlignment = (newAlignment) => {
        updateAlignment(newAlignment)
    }

        return (
            <div style={{width: '40%'}}>
                <h1 
                style={{textAlign: alignment
                }}>
                Align Me!
                </h1>

                <div style={{textAlign: "center"}}>
                    <button
                    onClick={() => changeAlignment("left")}
                    >Left</button>

                    <button
                    onClick={() => changeAlignment("center")}
                    >Center</button>

                    <button
                    onClick={() => changeAlignment("right")}
                    >Right</button>
                </div>

                <hr style={{marginTop: '20px'}}></hr>

            </div>
        )
}