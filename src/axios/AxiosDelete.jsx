import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosDelete = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);

    // Delete user function
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUsers((prev) =>
                prev.filter((user) => user.id !== id));
            alert("Deleted successfully")
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div style={{ padding: "20px" }}>
            <h2>User List</h2>

            {users.map((usr) => (
                <div
                    key={usr.id}
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px 0",
                        padding: "10px",
                        border: "1px solid #ddd",
                        borderRadius: "5px"

                    }}>
                    <span>{usr.name}</span>

                    <button
                        onClick={() => handleDelete(usr.id)}
                        style={{
                            background: "red",
                            color: "white",
                            border: "none",
                            padding: "5px 10px",
                            borderRadius: "3px",
                            cursor: "pointer"
                        }}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default AxiosDelete
