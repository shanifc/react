import React, { useState } from 'react'
import "./profileForm.css";

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        email: '',
        mobile: '',
        customerId: '',
        membership: '',
    });

    // handle chage

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Saved Successfully");
        console.log(formData);
    };

    //handle cancel
    const handleCancel = () => {
        if (window.confirm("Are you sure you want to cancel?")) {
            setFormData({
                name: "",
                gender: "",
                dob: "",
                email: "",
                mobile: "",
                customerId: "",
                membership: "",
            });
        }
    };

    return (
        <div className='container fade-in'>
            <div className='left'>
                <div className='icon'>hhhhh</div>
                <h2>Let's get you set up</h2>
                <p>It should only take a cuple of minutes to pair with your watch.</p>
            </div>

            <div className='right'>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Your name' />

                    <label>Gender</label>
                    <div className="radio-group">
                        <label>
                            <input type="radio" name='gender' value="Male" checked={formData.gender === "Male"} onChange={handleChange} />{" "}
                            Male
                        </label>

                        <label>
                            <input type="radio" name='gender' value="Female" checked={formData.gender === "Female"} onChange={handleChange} />{" "}
                            Female
                        </label>
                    </div>

                    <label>Date of Birth</label>
                    <input type="date" name='dob' value={formData.dob} onChange={handleChange} />

                    <label>Mobile</label>
                    <input type="tel" name='mobile' value={formData.mobile} onChange={handleChange} placeholder='Your mobile number' />

                    <label>Customer ID</label>
                    <input type="text" name='customerId' value={formData.customerId} onChange={handleChange} placeholder='578392-BNS9345-45' />

                    <label>Membership</label>
                    <div className='radio-group'>
                        <label>
                            <input type="radio" name='membership' value={Classic} checked={formData.membership === 'Classic'} onChange={handleChange} />{" "}
                            Classic
                        </label>

                        <label>
                            <input type="radio" name='membership' value={Silver} checked={formData.membership === 'Silver'} onChange={handleChange} />{" "}
                            Silver
                        </label>

                        <label>
                            <input type="radio" name='membership' value={Gold} checked={formData.membership === 'Gold'} onChange={handleChange} />{" "}
                            Gold
                        </label>
                    </div>
                    <div className="buttons">
                        <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="save"> Save </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm
