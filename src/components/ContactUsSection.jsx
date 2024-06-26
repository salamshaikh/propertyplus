import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const ContactUsSection = () => {

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post('https://propertyplus-73fd49e82310.herokuapp.com/contact', data);
            form.current.reset();
            toast.success("Congratulations! You Have Submitted Successfully.", {
                theme: "colored",
            });
            console.log('SUCCESS!', response.data);
        } catch (error) {
            toast.error("Something went wrong! Your message didn't send.", {
                theme: "colored",
            });
            console.error('FAILED...', error);
        }
    };

    return (
        <>
            <ToastContainer/>
            <section className="contact-us-section padding-b-120">
                <div className="container container-two">
                    <div className="contact-form bg-white">  
                        <div className="section-heading">
                            <span className="section-heading__subtitle bg-gray-100"> 
                                <span className="text-gradient fw-semibold">Contact us</span> 
                            </span>
                            <h2 className="section-heading__title">Do you have any questions? </h2>
                            <p className="section-heading__desc">For your car we will do everything: advice, repairs, and maintenance. We are the preferred choice by many home owners because...</p>
                        </div>
                        <div className="contact-form__form">
                            <form ref={form} onSubmit={sendEmail} className="contact-form__form">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="text" className="common-input" name='user_name' placeholder="Your Name" required/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="email" className="common-input" name='user_email' placeholder="Your E-mail" required/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="tel" className="common-input" name='user_phone' placeholder="Phone Number" required/>
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <input type="text" className="common-input" name='user_subject' placeholder="Subject" required/>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="common-input" name='message' placeholder="Your Message" required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-main w-100">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>  
            </section>   
        </>
    );
};

export default ContactUsSection;