import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Message:
          <textarea required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;