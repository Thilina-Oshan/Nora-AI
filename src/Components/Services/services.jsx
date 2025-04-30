import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services.css"; // Optional CSS file for additional styling

const services = [
  {
    title: "Web Design & Development",
    icon: "https://img.icons8.com/ios/50/ffffff/web-design.png",
    items: [
      "Custom, responsive designs tailored to your brand.",
      "Optimized for speed, security, and UX.",
      "SEO-friendly and mobile-optimized.",
    ],
  },
  {
    title: "Full Stack Development",
    icon: "https://img.icons8.com/ios/50/ffffff/source-code.png",
    items: [
      "End-to-end development from UI to backend.",
      "Scalable and secure solutions.",
      "Modern frameworks, databases, and cloud.",
    ],
  },
  {
    title: "AI Chatbot & AI Agent",
    icon: "/src/assets/img/icons8-ai-50.png",
    items: [
      "Automated customer engagement.",
      "AI virtual assistants for interactions.",
      "NLP and ML-based custom chatbots.",
    ],
  },
  {
    title: "Digital Marketing",
    icon: "/src/assets/img/icons8-digital-marketing-50.png",
    items: [
      "AI-powered SEO, content, and campaign strategy.",
      "Social media optimization.",
      "Data-driven conversions improvement.",
    ],
  },
  {
    title: "Branding & Business Planning",
    icon: "https://img.icons8.com/ios/50/ffffff/organization.png",
    items: [
      "Unique logo and brand identity creation.",
      "Business growth strategies.",
      "Brand-focused planning for ROI.",
    ],
  },
  {
    title: "Graphic Design & Video Editing",
    icon: "https://img.icons8.com/ios/50/ffffff/video-editing.png",
    items: [
      "High-quality digital and branding visuals.",
      "Video editing for social and business use.",
      "Visually aligned with brand identity.",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="service-title   text-white py-5 position-relative">
      {/* Header */}
      <div className="container text-center">
        <div className="services-btn mb-2">
          <h3 className="text-uppercase text-light">Services</h3>
        </div>
        <h2 className="fw-bold display-6 mt-3">
          TRANSFORMING BUSINESSES <br /> WITH AI & DIGITAL SOLUTIONS
        </h2>
      </div>

      {/* Service Cards */}
      <div className="container py-5 position-relative">
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card service-card h-100 p-4 text-white border-0">
                <div className="mb-3 text-center">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h5 className="fw-bold text-center">{service.title}</h5>
                <ul className="small mt-3">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Glow Background Effect */}
        <div
          className="position-absolute top-50 start-50 translate-middle z-n1"
          style={{
            width: "800px",
            height: "400px",
            background: "radial-gradient(circle, rgba(138,94,255,0.3) 0%, transparent 70%)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        ></div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-4 pb-5">
        <p className="fw-semibold fst-italic text-light">
          Ready to transform your marketing with AI?{" "}
          <a href="#" className="text-pink fw-bold text-decoration-none">
            Contact us today!
          </a>
        </p>
      </div>
    </section>
  );
};

export default Services;
