import React from 'react'

const Contact = () => {
    return (
        <section className="contact-section">
            <h3 className="contact-title">Want to contact me?</h3>
            <p className="contact-info">Please, use the form below or send an email to mateusz0brzezinski@gmail.com</p>

            <form className="contact-form">
                <div className="input-wrap">
                    <input className="contact-input" placeholder="name" type="text" />
                    <input className="contact-input" placeholder="e-mail" type="text" />
                </div>
                <textarea className="contact-message" placeholder="message..." name="Message" id="" cols="30" rows="10"></textarea>
                <button className="contact-button">Send</button>
            </form>
        </section>
    )
}
export default Contact