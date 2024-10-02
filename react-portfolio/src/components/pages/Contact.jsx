import React, { useState } from 'react';
import './Contact.css'; 


function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onBlur={handleBlur} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onBlur={handleBlur} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" onBlur={handleBlur} onChange={handleChange} />
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
