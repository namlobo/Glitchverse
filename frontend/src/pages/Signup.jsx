import React, {useState} from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [form, setForm] = useState({
        username:'',
        email:'',
        password:''
    });

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,form);
            alert(res.data.message);

        } catch(err){
            alert(err.response?.data?.message || "Error occured");
        }
    };

    return (
        <div className="retro-wrapper">
      <div className="retro-window">
        <div className="window-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="title">Sign Up</h2>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
        </div>
        // <form onSubmit={handleSubmit}>
        //     <input name="username" placeholder="Username" onChange={handleChange} required />
        //     <input name="email" placeholder="Email" onChange={handleChange} required />
        //     <input name="password" placeholder="Password" onChange={handleChange} required />
        //     <button type="submit">Sign up</button>

        // </form>
    );
};
export default Signup;

