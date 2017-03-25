import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper" className="wrapper">
                <div className="title">Get In Touch</div>
                <div id="footer" className="container">
                    <header className="style1">
                        <h2>Ipsum sapien elementum portitor?</h2>
                        <p>
                            Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br />
                            Nam pharetra laoreet imperdiet volutpat etiam consequat feugiat.
                        </p>
                    </header>
                    <hr />
                    <div className="row 150%">
                        <div className="6u 12u(mobile)">
                            <section>
                                <form method="post" action="#">
                                    <div className="row 50%">
                                        <div className="6u 12u(mobile)">
                                            <input type="text" name="name" id="contact-name" placeholder="Name" />
                                        </div>
                                        <div className="6u 12u(mobile)">
                                            <input type="text" name="email" id="contact-email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row 50%">
                                        <div className="12u">
                                            <textarea name="message" id="contact-message" placeholder="Message" rows="4" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="12u">
                                            <ul className="actions">
                                                <li><input type="submit" className="style1" value="Send" /></li>
                                                <li><input type="reset" className="style2" value="Reset" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
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
                    </div>
                    <hr />
                </div>
                <div id="copyright">
                    <ul>
                        <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;
