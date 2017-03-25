import React from 'react';

const ContactDetails = () => {
    return (
        <div className="6u 12u(mobile)">
            <section className="feature-list small">
                <div className="row">
                    <div className="6u 12u(mobile)">
                        <section>
                            <h3 className="icon fa-home">Mailing Address</h3>
                            <p>
                                Untitled Corporation<br />
                                1234 Somewhere Rd #987<br />
                                Nashville, TN 00000-0000
                            </p>
                        </section>
                    </div>
                    <div className="6u 12u(mobile)">
                        <section>
                            <h3 className="icon fa-comment">Social</h3>
                            <p>
                                <a href="#">@untitled-corp</a><br />
                                <a href="#">linkedin.com/untitled</a><br />
                                <a href="#">facebook.com/untitled</a>
                            </p>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="6u 12u(mobile)">
                        <section>
                            <h3 className="icon fa-envelope">Email</h3>
                            <p>
                                <a href="#">info@untitled.tld</a>
                            </p>
                        </section>
                    </div>
                    <div className="6u 12u(mobile)">
                        <section>
                            <h3 className="icon fa-phone">Phone</h3>
                            <p>
                                (000) 555-0000
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ContactDetails;