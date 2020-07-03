import React, { useState } from 'react';

export default function colorMe() {

    const [color, setColor] = useState('black')
    const [text, setText] = useState('Color me!')


    return (
        <div style={{width: '40%'}}>
                <h1 style={{color: color}}>{text}</h1>

                <input 
                type="text" 
                placeholder="Color" 
                className="color"
                ></input>

                <input type="text" 
                placeholder="Write here!" 
                className="text"
                ></input>

                <button onClick={
                () => {
                    setColor(document.getElementsByClassName('color')[0].value)
                    setText(document.getElementsByClassName('text')[0].value)
                }
                }>Submit</button>
            <hr style={{margin: '20px 0px'}}></hr>
        </div>
    )
}