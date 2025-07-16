import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Cubes from '../components/Cubes';


function Login() {
    const [step, setStep] = useState(1);
    // this initializes the step to track which form field is being filled
    // 1. username and 2. password (og had email too)

    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    // hook for redirecting to another route after login

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token); // save JWT token
                navigate("/home"); // go to home page on success
            } else {
                alert(data.message); // show error message from backend
            }
        } catch (error) {
            console.error("Login error", error); // log error for debugging
        }
    };

    return (
        <>
        <div className="retro-wrapper">
            <Cubes />
        <div className="retro-window">
            <div className="window-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
            </div>
        <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
            {step === 1 && (
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            )}
            {step === 2 && (
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            )}
            {step < 2 && (
                <button type="button" onClick={() => setStep(prev => prev + 1)}>
                    Next
                </button>
            )}
            {step === 2 && (
                <button type="submit">
                    Login
                </button>
            )}
        </form>
        </div>
        </div>
        </>
    );
}

export default Login;
