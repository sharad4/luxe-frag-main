import React from 'react'

const ContactForm = ({ formData, setFormData, handleFormSubmit }) => {
  return (
    <div className='contact-animate'>
        <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-6">
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                    <input 
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                    />
                </div>
                <div className="mb-6">
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                    />
                </div>
                <div className="mb-6">
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
                    <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                    ></textarea>
                </div>

                <button 
                    type='submit'
                    className='w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105'
                >
                    Send Message
                </button>
            </form>
        </div>
    </div>
  );
};

export default ContactForm