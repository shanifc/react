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
    const [error, setErros] = useState([]);
    const [loading, setLoading] = useState(false);

    //load users  form localstorage - mount
    useEffect(() => {
        const stored = localStorage.getItem("users");
        if (stored) {
            try {
                const parsedUser = JSON.parse(stored);
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
        e.preventDefult();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }


        // if (editMode){
        // setUsers()
        // }else{

        // }


    }

    return (
        <div className='formnew'>
            <h1>React CRUD - Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* name  */}
                    <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Your name' />
                </div>

                {/* email  */}
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Your email' />
                </div>

                {/* age  */}
                <div>
                    <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder='Your age' />
                </div>

                <button type='submit'>{editMode ? 'Update User' : 'Add User'}</button>
            </form>

        </div>
    )
}

export default Crud
