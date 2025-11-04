import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0); //initial value
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseState

// state is a internal data store that belongs to a specific component, and belongs to a changed  over time