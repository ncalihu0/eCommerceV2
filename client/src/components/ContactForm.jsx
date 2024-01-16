import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        setStatus("Sending!!!");
        const { firstName, lastName, email, phone, message } = e.target.elements;
        let details = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
        };
        let res = await axios.post("http://localhost:8080/newMessage", details)
        setStatus("Submit");
        let result = await res.data;
        alert(result.message);
    }

    return (
        <section className="get-in-touch">
            <h1 className="title">Get in touch</h1>
            <form className="contact-form row" onSubmit={handleSubmit}>
                <div className="form-field col x-50">
                    <input id="firstName" className="input-text js-input" name="firstName" type="text" required />
                    <label className="label" htmlFor="firstName">First Name</label>
                </div>
                <div className="form-field col x-50">
                    <input id="lastName" className="input-text js-input" type="text" name='lastName' required />
                    <label className="label" htmlFor="lastName">Last Name</label>
                </div>
                <div className="form-field col x-50">
                    <input id="email" className="input-text js-input" type="email" name='email' required />
                    <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col x-50">
                    <input id="phone" className="input-text js-input" type="text" name='phone' required />
                    <label className="label" htmlFor="phone">Phone Number</label>
                </div>
                <div className="form-field col x-100">
                    <input id="message" className="input-text js-input" type="text" name='message' required />
                    <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col x-100 align-center">
                    <button className="submit-btn" type="submit" >{status}</button>
                </div>
            </form>
        </section>



    )
}
