import React from 'react';

function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Add a User</h2>
            <button disabled={disabled}>Submit</button>

            <div>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.passwordConfirmation}</div>
                <div>{errors.terms}</div>
            </div>

            <div>
                <label>Name&nbsp;
                    <input 
                        value={values.first_name}
                        onChange={onChange}
                        name='first_name'
                        type='text'
                        placeholder='First name'
                    />
                    <input
                        value={values.last_name}
                        onChange={onChange}
                        name='last_name'
                        type='text'
                        placeholder='Last name'
                    />
                </label>
                <label>Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                        placeholder='Email Address'
                    />
                </label>
                <label>Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                </label>       
                <label>Have you read and agree to our terms of service?
                    <input
                        type='checkbox'
                        name='terms'
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    );
}

export default Form;
