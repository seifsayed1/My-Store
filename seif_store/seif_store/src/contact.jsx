function Contact() {
    return (
        <div className="contact py-4">
            <div className="form-container m-auto p-4">
                <div className="form">
                        <span className="heading d-block fs-3 fw-bold text-center mb-3">Contact Us</span>
                        <input placeholder="Name" type="text" className="input w-100 p-2 mb-3 fw-bold " />
                        <input placeholder="Email" id="mail" type="email" className="input w-100 p-2 mb-3 fw-bold " />
                        <textarea placeholder="How Can We Help You ?" rows="10" cols="30" id="message" name="message" className="textarea w-100 p-2 fw-bold mb-2 "></textarea>
                        <div className="button-container">
                            <div className="send-button w-100 p-1 fw-bold text-center">Send</div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;