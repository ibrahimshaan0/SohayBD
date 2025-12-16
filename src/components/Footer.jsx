import React from 'react'
import { Link } from 'react-router-dom'
import footerBg from '/home/footer/footer-bg.png'
import siteLogo from '/siteLogo.png'

const Footer = () => {
    return (
        <footer className="footer-area relative py-[120px]" style={{ backgroundImage: `url(${footerBg})`, backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container flex gap-6 pb-20">
                <div className='w-1/4 flex items-center justify-center'>
                    <img src={siteLogo} alt="sohaybd-logo" />
                </div>
                <div className='w-1/4'>
                    <h4 className='mb-8'>
                        Quick Links
                    </h4>
                    <ul>
                        <li className='mb-4  text-[20px]'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='mb-4  text-[20px]'>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li className='mb-4  text-[20px]'>
                            <Link to="/causes">Causes</Link>
                        </li>
                        <li className='mb-4  text-[20px]'>
                            <Link to="/donation">Donation</Link>
                        </li>
                        <li className='text-[20px]'>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-1/4'>
                    <h4 className='mb-8'>
                        Contact Us
                    </h4>
                    <ul>
                        <a href="tel:+08885581587" aria-label="phone link">
                            <li className='mb-4'>
                                <i className="ri-phone-fill mr-2"></i>
                                +08885581587
                            </li>
                        </a>
                        <a href="https://www.google.com/maps/place/Dhaka/@23.7809757,90.3372891,46009m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" aria-label="location link">
                            <li className='mb-4'>
                                <i className="ri-map-pin-2-fill mr-2"></i>
                                <address className='not-italic inline'>
                                    Mirpur DOHS, Dhaka 1216, Bangladesh
                                </address>
                            </li>
                        </a>
                        <a href="mailto:info@yoursite.com">
                            <li>
                                <i className="ri-mail-fill mr-2"></i>
                                info@yoursite.com
                            </li>
                        </a>
                    </ul>
                </div>
                <div className='w-1/4'>
                    <h3 className='mb-6 custom-h3'>
                        Stay Connected With Our Mission
                    </h3>
                    <p className='mb-6'>
                        Be a part of our journey toward helping those in need. Join our community and get updates, stories, and ways you can make an impact.
                    </p>
                    <a className='primary-btn mt-6 inline-block' href="#">Join Our Community <i className="ri-account-circle-fill"></i></a>
                </div>
            </div>
            <div className="container flex justify-between items-center pt-6 border-t border-[#E6B800]">
                <p>
                    &copy; 2025 SohayBD. All Rights Reserved.
                </p>
                <div className="social-icons">
                    <ul className='flex gap-6'>
                        <a href="#" aria-label='facebook link' target='_blank'>
                            <li>
                                <i className="ri-facebook-fill"></i>
                            </li>
                        </a>
                        <a href="#" aria-label='instagram link' target='_blank'>
                            <li>
                                <i className="ri-instagram-fill"></i>
                            </li>
                        </a>
                        <a href="#" aria-label='twitter link' target='_blank'>
                            <li>
                                <i className="ri-twitter-fill"></i>
                            </li>
                        </a>
                        <a href="#" aria-label='linkedin link' target='_blank'>
                            <li>
                                <i className="ri-linkedin-fill"></i>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer