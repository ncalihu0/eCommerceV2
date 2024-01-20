import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, mail, password } = e.target.elements;
        let details = {
            username: username.value,
            mail: mail.value,
            password: password.value
        }

        try {
            let res = await axios.post("http://localhost:8080/signUp", details);
            let result = await res.data
            if (result.message) {
                alert(result.message)
                navigate('/');

            } else {
                alert(`User couldn't be created`)
            }

        } catch (err) {
            alert("error")
        }

    }
    return (
        <div className='loginContainer'>
            <div className="login">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Welcome! Feel Free to Join us</h2>
                    <div className="form-field">
                        <label htmlFor="signup-name"><i className="fa fa-user"></i></label>
                        <input id="singup-name" type="text" name="username" placeholder="username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="signup-mail"><i className="fa fa-user"></i></label>
                        <input id="signup-mail" type="text" name="mail" placeholder="E-Mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="signup-password"><i className="fa fa-lock"></i></label>
                        <input id="signup-password" type="password" name="password" placeholder="Password" pattern=".{6,}" required />
                    </div>
                    <button type="submit" className="button">
                        <div className="arrow-wrapper">
                            <span className="arrow"></span>
                        </div>
                        <p className="button-text">SIGN UP</p>
                    </button>
                </form>
            </div>
        </div>
    )
}
