import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crud = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const signUp = async (userData) => {
        try {
            const response = await axios.post(`${url}/signup`, userData);
            return response.data;
        } catch (err) {
            throw err;
        }
    };

    const login = async (credentials) => {
        try {
            const response = await axios.post(`${url}/login`, credentials);
            const { token } = response.data;
            localStorage.setItem("authToken", token);
            return response.data;
        } catch (err) {
            throw err;
        }
    };

    return { signUp, login };
};

export default Crud;
