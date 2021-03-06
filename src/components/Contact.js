import React, { useState } from "react";
import { useAlert } from "react-alert";
import { Zoom, Bounce } from "react-reveal";

import axios from "axios";

import "./Contact.css";

const Contact = ({id}) => {
  const alert = useAlert();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const baseUrl = 'https://us-central1-jonathandiazportfolio-b23ac.cloudfunctions.net/sendMail';
 const testUrl = 'http://localhost:5001/jonathandiazportfolio-b23ac/us-central1/sendMail';
  const { name, email, message } = formdata;

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert.show("Please fill out the contact fields");
      return console.log("fields are emptys");
    }
const form = await axios.post(`${baseUrl}`, formdata).catch((err) => console.log(err));
   
      

    if (form.status === 200) {
      setFormData({ name: "", email: "", message: "" });
      alert.show("Message Sent Successfully");
    }
  }

  return (
    <div id={id}className='contact'>
      <h1>Contact me</h1>
      <h3>Want to work together or have questions please contact me</h3>

      <Zoom>
        <div className='contact__form'>
          <form onSubmit={(e) => onSubmit(e)}>
            <label>Name</label>

            <input
              placeholder='Enter name'
              onChange={(e) => handleChange(e)}
              value={name}
              name='name'
              type='text'
            />

            <label>Email</label>

            <input
              placeholder='Enter your email'
              onChange={(e) => handleChange(e)}
              value={email}
              name='email'
              type='text'
            />

            <label>Message</label>

            <textarea
              placeholder='Enter message'
              onChange={(e) => handleChange(e)}
              value={message}
              name='message'
              type='text'
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </Zoom>
    </div>
  );
};

export default Contact;
