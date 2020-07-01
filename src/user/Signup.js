import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/layout';
import { signup } from './index';
import '../assets/css/signup.css';

// This component provides a form to allow a new user account to be created, the logic from
// index is utilized to insure that the user info is saved to the database

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        error: '',
        success: false
    });

    const { name, email, password, password2, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password, password2 }).then(data => {
            if (data) {
                setValues({ ...values, error: data[Object.keys(data)[0]], success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    password2:'',
                    error: '',
                    success: true
                });
            }
        });
    };


    console.log(values)

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>

            <div className="form-group">
                <label className="text-muted">Confirm Password</label>
                <input onChange={handleChange('password2')} type="password" className="form-control" value={password2} />
            </div>

            <button onClick={clickSubmit} className="btn">
                Sign Up
            </button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Your account has been created. Please <Link to="/signin" style={{ color: '#76bed0' }}>Sign In.</Link>
        </div>
    );

    return (
        <Layout
            title="Sign Up"
            description="Sign Up for StoreName™"
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    );
};

export default Signup;
