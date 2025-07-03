import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className='contact-animate'>
         <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
        <div className="space-y-6">
            <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Phone className='h-6 w-6 text-purple-600'/>
                </div>
                <div>
                    <p className='font-semibold'>Phone</p>
                    <p className='text-gray-600'>+1 (555) 123-4567</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Mail className='h-6 w-6 text-purple-600'/>
                </div>
                <div>
                    <p className='font-semibold'>Email</p>
                    <p className='text-gray-600'>hello@luxeperfume.com</p>
                </div>
            </div>
                <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <MapPin className='h-6 w-6 text-purple-600'/>
                </div>
                <div>
                    <p className='font-semibold'>Address</p>
                    <p className='text-gray-600'>123 Luxury Ave, Berverly Hills, CA 90210</p>
                </div>
            </div>
        </div>
        <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
                <button className='bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors'>
                    <Facebook className='w-5 h-5'/>
                </button>
                      <button className='bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors'>
                    <Instagram className='w-5 h-5'/>
                </button>
                      <button className='bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors'>
                    <Twitter className='w-5 h-5'/>
                </button>
            </div>
        </div>
    </div>
  );
};

export default ContactInfo