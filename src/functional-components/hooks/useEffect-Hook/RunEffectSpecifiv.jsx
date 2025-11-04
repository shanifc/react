import React, { useEffect, useState } from 'react'

const RunEffectSpecifiv = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`count changed to ${count}`);
    }, [count]); // runs only count changes

    return (
        <div>
            <h2> Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default RunEffectSpecifiv
