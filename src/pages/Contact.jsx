import React, {useRef , useEffect} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Footer from '../component/Footer';

const Contact = () => {

    const recaptchaRef = React.createRef();

    return(
        <>  
           

            <section className='page-contact'>
                <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex flex-column align-items-center">
                                <p>Contact me</p>
                                <h1>GET IN TOUCH</h1>
                            </div>
                            <div className="col-12 ps-lg-4 row row-cols-lg-2 row-cols-1">
                                <div className="col">
                                    <p>
                                    We are awwwards and we are here to serve! How can we help you?
                                    If you have any questions, please contact us through this form.

                                    Please complete the following fields.
                                    </p>
                                </div>


                            <div className="col">
                                <form action="">
                                    <div className="group d-flex flex-column">
                                        <label className='py-2' htmlFor="name" name="name">name (*) </label>
                                        <input className='py-2 border-0' type="text" />
                                    </div>

                                    <div className="group d-flex flex-column">
                                        <label className='py-2' htmlFor="name" name="mail">mail (*) </label>
                                        <input className='py-2 border-0' type="email" />
                                    </div>

                                    <div className="group d-flex flex-column">
                                        <label className='py-2' htmlFor="phone" name="name">phone (*) </label>
                                        <input className='py-2 border-0' type="tel" />
                                    </div>

                                    <div className="group d-flex flex-column">
                                        <label className='py-2' htmlFor="comment" name="comment">message (*) </label>
                                        <textarea className='py-2 border-0'/>
                                    </div>

                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LfnMSgjAAAAAP9p89Nds9Ay3NT9lx3ptvJfqwEm"
                                        
                                    />
                                </form>
                            </div>


                            </div>
                        </div>
                </div>

                <Footer />
            </section>
            
        </>
    )
}
export default Contact;