import React, { useEffect } from 'react'

const RunEffect = () => {
    useEffect(() => {
        console.log("Component mounted!");
    }, []); //empty dependency array

    return (
        <h2>runs only once when mounted!</h2>
    );
}

export default RunEffect
