import axios from 'axios';
import React, { useState } from 'react'

const AxiosPut = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const handleUpdate = async () => {
        try {
            axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
                name: name
            });

            alert("Updated successfully!");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder='User ID'
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default AxiosPut
