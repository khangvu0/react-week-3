import React, { useState } from 'react';
import '../styles/Easy.css';

export default function Easy() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="easy-container">
            <h1>Counter App</h1>
            <div className="counter">
                <h2>{count}</h2>
                <div className="buttons">
                    <button className="easy-btn" onClick={decrement}>
                        Decrement -
                    </button>
                    <button className="easy-btn" onClick={increment}>
                        Increment +
                    </button>
                </div>
            </div>
        </div>
    );
}
