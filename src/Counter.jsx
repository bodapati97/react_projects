import React from 'react'
import "./Counter.css"
const Counter = () => {
  return (
    <div>
        
    {/* DIV - for heading counter */}

    <div>
        <h1 style={{
            fontSize: "2rem",
            color: "#200020",
            }}>Counter App</h1>
    </div>

    <div>
        <p style={{
            fontSize: "1.5rem",
            color: "#200020",
            }}>
            Counter:
            <span>0</span>
            </p>
    </div>


    <div className="button_container"
    style={{
        display:'flex',
        gap: "1rem",
        }}
    >
        <button className="button" style={{
            fontSize: "2rem",
            background : "green",
            color: "white",
            padding: "2rem",
            }} >Increase</button>
        <button className="button" style={{
            fontSize: "2rem",
            background : "red",
            color: "white",
            padding: "2rem",
            }}>Decrease</button>
    
    </div>

    </div>




  )
}

export default Counter
Counter