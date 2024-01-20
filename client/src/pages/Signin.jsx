import React from 'react'
import '../styles/Form.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        let details = {
            username: username.value,
            password: password.value
        }

        try {
            let res = await axios.post("http://localhost:8080/signIn", details);
            let result = await res.data
            if (result.message) {
                alert(result.message)
                navigate('/');

            } else {
                alert(result.error)
            }

        } catch (err) {
            alert(err);
        }

    }
    return (
        <div className='loginContainer'>
            <div className="login">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Welcome Back</h2>
                    <div className="form-field">
                        <label htmlFor="login-mail"><i className="fa fa-user"></i></label>
                        <input id="login-username" type="text" name="username" placeholder="Username" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="login-password"><i className="fa fa-lock"></i></label>
                        <input id="login-password" type="password" name="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="button">
                        <div className="arrow-wrapper">
                            <span className="arrow"></span>
                        </div>
                        <p className="button-text">SIGN IN</p>
                    </button>
                </form>
            </div>
        </div>


    )
}
