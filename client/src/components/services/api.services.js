import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Signup response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during signup:', error.response ? error.response.data : error.message);
        throw error.response?.data || error.message;
    }
};

export const login = async (userData) => {
    try {
        console.log(userData);
        const response = await axios.post(`${API_URL}/login`, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Login response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error.response?.data || error.message;
    }
};
