import React from 'react'
import './rhf.css'
import { useForm } from 'react-hook-form'

const BasicHookForm = () => {

    //initialize the useForm hook
    const {
        register,// used to register input fields
        handleSubmit,// function to handle form submission
        formState: { errors },// object containing validation errors
        reset// function to reset the form to initial values
    } = useForm();

    //function to handle form submission
    const onSubmit = (data) => {
        console.log(data);
        reset();//reset the form after submission
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <label>Name</label>
            <input
                {...register("name", { required: "name is required" })}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

            {/* email */}
            <label>Email:</label>
            <input
                {...register("email", {
                    required: "email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email"
                    }
                })}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

            {/* submission */}
            <button type='submit'>Submit</button>

            {/* reset button */}
            <button type='reset' onClick={() => reset()}>Reset</button>
        </form>
    )
}

export default BasicHookForm