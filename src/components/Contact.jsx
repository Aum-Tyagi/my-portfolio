import React, { useState } from 'react';
import { Element } from 'react-scroll';
import {  FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  return (
    <Element name="contact">
      <section id="contact" className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {/* <a href="https://twitter.com/DakshMakhija_" target="_blank" rel="noopener noreferrer" className="text-cornell hover:text-cornellDark">
              <FaTwitterSquare size={32} />
            </a> */}
            <a href="https://www.linkedin.com/in/aumtyagicornell/" target="_blank" rel="noopener noreferrer" className="text-cornell hover:text-cornellDark">
              <FaLinkedin size={32} />
            </a>
            {/* <a href="https://github.com/Daksh2356" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:text-black-700">
              <FaGithub size={32} />
            </a> */}
            <a href="mailto:at973@cornell.edu" className="text-cornell hover:text-cornellDark">
              <FaEnvelope size={32} />
            </a>
          </div>

          <form
            action="https://formsubmit.co/6598c82343d43532d73e824e984aa3a6" // Replace with your FormSubmit email
            method="POST"
            className="max-w-lg mx-auto w-full px-4 sm:px-0">

              {/* Auto-Reply Setup */}
              <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I have received your message and will get back to you shortly."/>
            
            {/* Redirect to a Custom Thank You Page */}
            {/* <input type="hidden" name="_next" value="http://localhost:3000/thank-you">  */}
            
            {/* Spam Protection */}
            <input type="hidden" name="_captcha" value="false"/>
            
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-cornell hover:bg-cornellDark text-white hover:text-red font-semibold py-2 px-4 rounded w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
