import React from 'react';
import "./about.css";

const AboutSection = () => {
    return (
        <section style={{ width: '100%', padding: '4rem 1rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }} id="abouth">

                <div className="about-btn">
                    <h3>About us</h3>
                </div>

                <h2 className="about-heading">
                    WHO WE ARE: SRI LANKA'S FIRST <br />
                    AI MARKETING AGENCY
                </h2>

                <div className="about-contentBox">
                    <p className="about-content">
                        We are a pioneering AI marketing agency in Sri Lanka, dedicated to
                        transforming businesses through innovative digital solutions. Our
                        team of experts combines cutting-edge AI technology with creative
                        marketing strategies to deliver exceptional results for our clients.
                        With a focus on data-driven approaches and personalized service, we
                        help businesses of all sizes achieve their marketing goals and stay
                        ahead in the digital landscape.
                    </p>
                </div>

            </div>
<br /><br /><br />
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-center mb-10">
                    What Makes Us Unique
                </h2>

                <div className="row justify-content-center">
                    <div className="col-md-3 info-box">
                        <div className="unique-icon">①</div>
                        <h5>SRI LANKA’S FIRST AI MARKETING AGENCY</h5>
                        <p>We are pioneers, bringing AI-driven marketing innovations to businesses nationwide.</p>
                    </div>
                    <div className="col-md-3 info-box">
                        <div className="unique-icon">②</div>
                        <h5>AI-POWERED PRECISION</h5>
                        <p>Our advanced algorithms analyze data, predict trends, and optimize campaigns for maximum impact.</p>
                    </div>
                    <div className="col-md-3 info-box">
                        <div className="unique-icon">③</div>
                        <h5>HYPER-PERSONALIZED MARKETING</h5>
                        <p>We craft targeted strategies that engage the right audience at the right time, boosting conversions.</p>
                    </div>
                    <div className="col-md-3 info-box">
                        <div className="unique-icon">④</div>
                        <h5>REAL-TIME DATA & INSIGHTS</h5>
                        <p>We make data-driven decisions instantly, ensuring your marketing efforts stay ahead of the competition.</p>
                    </div>
                </div>

                <div className="projects-highlight text-center mt-12">
                    <h3>WE’VE DONE</h3>
                    <h1 className="text-4xl font-bold">20+</h1>
                    <p>SUCCESSFUL PROJECTS</p>
                </div>
            </div>

        </section>


    );
};

export default AboutSection;
