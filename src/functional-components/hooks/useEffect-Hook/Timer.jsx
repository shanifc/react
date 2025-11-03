import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000)
        // setIntervel creats a timer that runs every 1000 milliseconds(1 seconds)

        //cleanup function
        return () => clearInterval(interval);

    }, []); // empty depandacy - run once on mount

    return (
        <div>
            <p>Timer: {seconds} seconds</p>
        </div>
    )
}

export default Timer
