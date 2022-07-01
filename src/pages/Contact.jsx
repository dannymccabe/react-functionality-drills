import React, { useState } from "react";
import "../form.css"

const Contact = () => {

  const [formData, setFormData] = useState(
    {firstName: "", lastName: "", email: "", password: ""}
  )
  
  console.log(formData)
  
  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
  }
  
  return (
    <div className="form__container">
    <form className="form">
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
        />
        <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
        />
        <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
        />
    </form>
    </div>
  )
};

export default Contact;
