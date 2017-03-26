import React from 'react';

const ContactDetails = () => {
    return (
        <div className="12u$">
            <section className="feature-list small">
                <div className="row">
                    <div className="6u 12u(mobile)">
                        <section>
                            <h3 className="icon fa-home">Mailing Address</h3>
                            <p>
                                PUP College of Engineering
                                <br />
                                CEA Building, NDC Campus
                                <br />
                                Anonas cor. Pureza Sts.
                                <br />
                                Sta. Mesa, Manila, Philippines 01008
                            </p>
                        </section>
                    </div>
                    <div className="6u 12u(mobile)">
                        <section>
                            <h3 className="icon fa-comment">Social</h3>
                            <p>
                                <a href="https://www.facebook.com/coresofficial/" target="_blank">
                                    Facebook
                                </a>
                                <br />
                                <a href="https://twitter.com/coresofficial" target="_blank">
                                    Twitter
                                </a>
                                <br />
                                <a href="https://instagram.com/coresofficial" target="_blank">
                                    Instagram
                                </a>
                            </p>
                        </section>
						<section>
                            <h3 className="icon fa-envelope">Email</h3>
                            <p>
                                <a href="#">
                                    coresofficial@gmail.com
                                </a>
                            </p>
                        </section>
						 <section>
                            <h3 className="icon fa-phone">Phone</h3>
                            <p>
                                0915 964 7951
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ContactDetails;