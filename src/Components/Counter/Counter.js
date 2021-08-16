import React from 'react';
import './Counter.css'

const Counter = ({add, handleRmv}) => {
    return (
        <div className="counter">
            <h1>Friends Added: {add} </h1>
            <button onClick={handleRmv}>Remove friend</button>
        </div>
    );
};

export default Counter;