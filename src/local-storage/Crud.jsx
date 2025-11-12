import React, { useEffect, useState } from 'react'
import './crud.css'

const Crud = () => {

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        age: ''
    })

    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    // const [error, setErros] = useState([]);
    const [error, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    //load users  form localstorage - mount
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
                setUsers(parsedUser);
            } catch (error) {
                console.error("Error parsing data", error);
                localStorage.removeItem("users"); //clear corrupted data
            }
        }
        setIsLoading(true); // mark as load
    }, [])

    //save users to localstorage
    useEffect(() => {
        if (isLoading) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users, isLoading])

    // update formdata field dynamicaly as user types 
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    //validation
    const validate = () => {
        const newErrors = {};
        const { name, email, age } = formData;

        if (!name.trim()) newErrors.name = 'Name is required';

        if (!email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email is invalid";

        if (!age) newErrors.age = "Age is reqired";
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "Age must not be between 1 and 120";

        return newErrors;
    }

    //form submition
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }


        if (editMode) {
            setUsers(users.map(user => user.id === formData.id ? formData : user));
            setEditMode(false);
        } else {
            const newUser = { ...formData, id: Date.now().toString() };
            setUsers([...users, newUser])

        }

        setFormData({
            id: '',
            name: '',
            email: '',
            age: ''
        });

        setErrors({});

    }

    const handleEdit = (user) => {
        setFormData(user);
        setEditMode(false);
    }

    return (
        <div className='formnew'>
            <h1>React CRUD - Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* name  */}
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Your name' />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>

                {/* email  */}
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your email' />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>

                {/* age  */}
                <div>
                    <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='Your age' />
                    {error.age && <p style={{ color: 'red' }}>{error.age}</p>}
                </div>

                <button type='submit'>{editMode ? 'Update User' : 'Add User'}</button>
                {
                    editMode && (
                        <button type='button'></button>
                    )
                }
            </form>

            <hr />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h2>User List</h2>
                {/* clear data button  */}
            </div>

            {users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(us => (
                            <tr key={us.id}>
                                <td>{us.name}</td>
                                <td>{us.email}</td>
                                <td>{us.age}</td>
                                <td>
                                    <button onClick={() => handleEdit(us)}>Edit</button>
                                    <button style={{ marginLeft: '10px' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users added yet.</p>
            )}

        </div>
    )
}

export default Crud
