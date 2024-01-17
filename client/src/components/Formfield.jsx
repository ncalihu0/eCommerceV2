import React from 'react'

export default function Formfield({ id, type, name, placeholder, label }) {
    return (
        <div className={`form-field col x-50`}>
            <input id={id} className="input-text js-input" type={type} name={name} placeholder={placeholder} required />
            <label className="label" htmlFor={id}>{label}</label>
        </div>
    )
}
