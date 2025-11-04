import React, { useState } from 'react'

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true);

    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? 'ON' : 'OFF'}
            </button>
        </div>
    )
}

export default ToggleButton
