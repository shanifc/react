import React, { useState } from 'react'

const NameForm = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text"
                placeholder="enter your name"
                value={name} onChange={(e) => setName(e.target.value)} />

            <p>hello, {name || 'stranger'}!</p>

        </div>
    )
}

export default NameForm
