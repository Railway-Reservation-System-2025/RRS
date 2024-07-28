import React, { useState } from 'react';
import { login } from '../../services/api.services';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [userDetails, setUserDetails] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            setUserDetails(response);
            setMessage('Login successful!');
            localStorage.setItem('user', JSON.stringify(response));
        } catch (error) {
            console.error('Error:', error);
            setMessage(`Error: ${error}`);
        }
    };

    console.log('User Details State:', userDetails);

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
            {userDetails && (
                <div>
                    <h3>User Details</h3>
                    <p>Name: {userDetails.name || 'N/A'}</p>
                    <p>Email: {userDetails.email || 'N/A'}</p>
                    <h3>Booking Details</h3>
                    <pre>{JSON.stringify(userDetails.bookingDetails || [], null, 2)}</pre>
                </div>
            )}
        </form>
    );
};

export default Login;
