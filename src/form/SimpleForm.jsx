import React, { useState } from 'react'

const SimpleForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefult();

        if (!email) {
            setError('Email is required');
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Email is invalid!');
        }
        else {
            setError('');
            alert('Form submitted succesfully', email);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email"
                value={email}
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>Error</p>}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SimpleForm
