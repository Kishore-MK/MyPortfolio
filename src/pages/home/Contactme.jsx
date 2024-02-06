export default function ContactMe(){
    return (
        <section id="Contact" className="contact-section">
            <div>
                <h2>Contact Me</h2>
                <p className="text-lg">Please provide your contact information below:</p>
            </div>
            <form className="contact-form-container">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input type="text"  className="contact-input text-md" name="first-name" id="first-name" required/>
                    </label>
                    <label htmlFor="second-name" className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input type="text"  className="contact-input text-md" name="second-name" id="second-name" required/>
                    </label>
                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">Email</span>
                        <input type="email"  className="contact-input text-md" name="phone-number" id="phone-number" required/>
                    </label>
                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">Phone Number</span>
                        <input type="number"  className="contact-input text-md" name="phone-number" id="phone-number" required/>
                    </label>
                    <label htmlFor="choose-topic" className="contact-label">
                        <span className="text-md">Choose a topic</span>
                        <select className="contact-input text-md" id="">
                            <option>Select one</option>
                            <option>item one</option>
                            <option>item two</option>
                            <option>item three</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact-label">
                        <span className="text-md">Your message</span>
                        <textarea placeholder="Type your message" className="contact-input text-md" id="message" rows="8"></textarea>
                    </label>
                    <label htmlFor="checkbox" className="contact-label">
                        <input type="checkbox" className="contact-input text-md" name="checkbox" id="checkbox" required/>
                        <span className="text-md">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact-form-btn">Send</button>
                    </div>
                </div>
            </form>
        </section>
    );
}