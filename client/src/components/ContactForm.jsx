import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import Formfield from './Formfield';

export default function ContactForm() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, message } = e.target.elements;
        let details = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            message: message.value,
        };
        setStatus("Sending!!!");
        if (!validator.isEmail(details.email)) {
            return alert('Please input valid email!')
        } else if (!/^[a-zA-Z]*$/g.test(details.firstName)) {
            return alert('First name must be a valid, please enter actual characters.')
        } else if (!/^[a-zA-Z]*$/g.test(details.lastName)) {
            return alert('Last name must be a valid, please enter actual characters.')
        } else if (!/^[2-9]\d{2}-\d{3}-\d{4}$/g.test(details.phone)) {
            return alert('Please enter the correct phone number format')
        } else if (!/^[a-zA-Z0-9\s.,!?()-]+$/g.test(details.message)) {
            return alert('Enter correct message format')
        } else {
            try {
                let res = await axios.post("http://localhost:8080/newMessage", details)
                setStatus("Submit");
                let result = await res.data;
                alert(result.message);

                firstName.value = "";
                lastName.value = "";
                email.value = "";
                phone.value = "";
                message.value = "";
            } catch (err) {
                alert('error')
            }

        }
    }

    return (
        <section className="get-in-touch">
            <h1 className="title">Get in touch</h1>
            <form className="contact-form row" onSubmit={handleSubmit}>
                <Formfield id="firstName" type="text" name="firstName" placeholder="nicole" label="First Name" />
                <Formfield id="lastName" type="text" name="lastName" placeholder="calihua" label="Last Name" />
                <Formfield id="email" type="email" name="email" placeholder="nicky@gmail.com" label="E-mail" />
                <Formfield id="phone" type="text" name="phone" placeholder="000-000-0000" label="Phone Number" />
                <Formfield id="message" type="text" name="message" placeholder="hello there!" label="Message" />
                <div className="form-field col x-100 align-center">
                    <button className="submit-btn" type="submit" >{status}</button>
                </div>
            </form>
        </section>



    )
}
