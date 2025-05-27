import React from 'react';
import './tools.css';

const ToolsSection = () => {
  return (
    <section id="tools" className="py-5 text-center">
      <div className="container">
        <div className="mb-4">
          <span className="tools-badge">TOOLS</span>
          <h2 className="section-title mt-3">
            AI TOOLS BUILT TO POWER YOUR<br />PRODUCTIVITY
          </h2>
        </div>

        <div className="row justify-content-center g-4 mt-4">
          {/* Tool Card 1 */}
          <div className="col-md-6 col-lg-5">
            <div className="tool-card p-4 rounded-4">
              <div className="d-flex align-items-center">
               {/*  <img src={bizLogo} alt="Biz Name" className="tool-logo me-3" /> */}
                <div className="text-start">
                  <h5 className="text-white mb-0 fw-bold">BIZ Names</h5>
                  <h6 className="tool-subtitle">Business Names Generator</h6>
                </div>
              </div>
              <p className="tool-description mt-3">
                Our Business Name Generator is a smart AI tool that instantly creates unique and catchy names for your brand. It’s the easiest way to spark ideas and find the perfect name in seconds.
              </p>
              <a href="#" className="btn try-btn mt-3">TRY IT OUT</a>
            </div>
          </div>

          {/* Tool Card 2 */}
          <div className="col-md-6 col-lg-5">
            <div className="tool-card p-4 rounded-4">
              <div className="d-flex align-items-center">
                <img src={bizLogo} alt="Biz Name" className="tool-logo me-3" />
                <div className="text-start">
                  <h5 className="text-white mb-0 fw-bold">BIZ Names</h5>
                  <h6 className="tool-subtitle">Business Names Generator</h6>
                </div>
              </div>
              <p className="tool-description mt-3">
                Our Business Name Generator is a smart AI tool that instantly creates unique and catchy names for your brand. It’s the easiest way to spark ideas and find the perfect name in seconds.
              </p>
              <a href="#" className="btn try-btn mt-3">TRY IT OUT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
