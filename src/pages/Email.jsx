import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import BackButton from '../components/BackButton';

function Email() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_a7orrn3',
            'template_m5b61xk',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            },
            'YIRYzmTf7xnnop6w6'
        ).then(() => {
            alert('Email sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            navigate('/portfolio');
        }).catch((error) => {
            alert('Failed to send email. Please try again.');
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <div className="fade-in absolute inset-0 pointer-events-none z-50 p-3 md:p-6">
                <div className="metallic-border w-full h-full border-2 border-gray-300">
                </div>
            </div>
            
            <BackButton onClick={() => navigate('/portfolio')} />
            
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-[3] w-[90%] max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl md:text-3xl font-['IBM_Plex_Mono',_monospace] mb-4 text-center">
                        Send me a message
                    </h2>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="px-4 py-3 bg-transparent border-2 border-white text-white font-['IBM_Plex_Mono',_monospace] focus:outline-none focus:border-gray-300 placeholder-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="px-4 py-3 bg-transparent border-2 border-white text-white font-['IBM_Plex_Mono',_monospace] focus:outline-none focus:border-gray-300 placeholder-gray-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="px-4 py-3 bg-transparent border-2 border-white text-white font-['IBM_Plex_Mono',_monospace] focus:outline-none focus:border-gray-300 resize-none placeholder-gray-400"
                    />
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 portfolio-button text-white font-['IBM_Plex_Mono',_monospace] border-2 border-white px-6 py-3 transition-all duration-300 hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Email;