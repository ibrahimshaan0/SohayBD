import React, { useState } from 'react'
import CallToAction from '../components/CallToAction.jsx'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            <section className="page-hero py-60 relative">
                <div className="hero-bg"></div>
                <div className="container text-center">
                    <h1 className="mb-6">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Have questions or want to get involved? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="contact-content py-20">
                <div className="container">
                    <div className="flex flex-wrap gap-12">
                        <div className="w-full lg:w-1/2">
                            <h2 className="mb-8">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-semibold">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#28A745] focus:outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#28A745] focus:outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 font-semibold">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#28A745] focus:outline-none"
                                        placeholder="+880 1234-567890"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 font-semibold">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#28A745] focus:outline-none resize-none"
                                        placeholder="Tell us how we can help..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="primary-btn w-full">
                                    Send Message <i className="ri-send-plane-fill"></i>
                                </button>
                            </form>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <h2 className="mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="contact-info-item">
                                    <div className="flex items-start gap-4">
                                        <i className="ri-map-pin-fill text-3xl text-[#28A745]"></i>
                                        <div>
                                            <h3 className="mb-2">Our Address</h3>
                                            <p className="text-gray-600">
                                                123 Charity Street<br />
                                                Dhaka 1000<br />
                                                Bangladesh
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="flex items-start gap-4">
                                        <i className="ri-phone-fill text-3xl text-[#28A745]"></i>
                                        <div>
                                            <h3 className="mb-2">Phone</h3>
                                            <p className="text-gray-600">
                                                +880 1234-567890<br />
                                                +880 9876-543210
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="flex items-start gap-4">
                                        <i className="ri-mail-fill text-3xl text-[#28A745]"></i>
                                        <div>
                                            <h3 className="mb-2">Email</h3>
                                            <p className="text-gray-600">
                                                info@sohaybd.org<br />
                                                support@sohaybd.org
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="flex items-start gap-4">
                                        <i className="ri-time-fill text-3xl text-[#28A745]"></i>
                                        <div>
                                            <h3 className="mb-2">Office Hours</h3>
                                            <p className="text-gray-600">
                                                Sunday - Thursday: 9AM - 6PM<br />
                                                Friday: Closed<br />
                                                Saturday: 10AM - 4PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    )
}

export default Contact