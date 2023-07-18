import React, { useState } from 'react';
import './App.css';

function Counter() {
    
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);   
    }

    return (
        <div >
            <h2 >Count: {count}</h2>
            <button onClick={handleIncrement} className="btn">Increment</button>
            <button onClick={handleDecrement} className="btn">Decrement</button>
        </div>
    );
}

export default Counter;