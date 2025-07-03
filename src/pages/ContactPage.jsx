import React, { useEffect, useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import { useAnimation } from '../hooks/useAnimation';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const { animateElements } = useAnimation();

  useEffect(() => {
    const contactElements = document.querySelectorAll('.contact-animate');
    animateElements(contactElements, 100);
  }, [animateElements]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: ''});
  };

  return (
    <div className='pt-24 pb-16'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="contact-animate text-5xl font-bold text-center mb-16 text-gray-900">
          Get in Touch
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo /> 
          <ContactForm 
            formData={formData}
            setFormData={setFormData}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;