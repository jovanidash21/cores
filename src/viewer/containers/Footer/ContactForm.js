import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
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
        )
    }
}

export default ContactForm;
