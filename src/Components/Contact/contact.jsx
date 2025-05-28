import './contact.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        reason: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://formspree.io/f/xjvowzqk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    reason: '',
                    description: '',
                });
            } else {
                alert('There was an error submitting the form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        }
    };

    return (

        <section className="d-flex align-items-center" id="contact">
            <div className="container text-center py-5">
                <button className='neon-btn mb-4'>Contact Us</button>
                <h2>LET’S CONNECT AND CREATE SOMETHING GREAT</h2>

                <div className="contact-form mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    placeholder="Ex: John"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Last Name (Optional)</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Ex: Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Ex: johndoe@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Reason</label>
                            <input
                                type="text"
                                name="reason"
                                className="form-control"
                                placeholder="Ex: Looking for AI Solution"
                                value={formData.reason}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                name="description"
                                className="form-control"
                                rows="5"
                                placeholder="Ex: I’m looking for..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="gradient-btn">Request a Call</button>

                        <p className="footer-note">
                            We’ll get back to you within 48 hours. We’re here to help and excited to hear from you!
                        </p>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Contact;
