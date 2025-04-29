import React from "react";
import './services.css'; // Optional: use this if you have extra styles

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
    icon: "https://img.icons8.com/ios/50/ffffff/chatbot.png",
    items: [
      "Automated customer engagement.",
      "AI virtual assistants for interactions.",
      "NLP and ML-based custom chatbots.",
    ],
  },
  {
    title: "Digital Marketing",
    icon: "https://img.icons8.com/ios/50/ffffff/marketing.png",
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
    <section className="bg-black text-white py-16 px-4 relative" id="services">
      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <div className="mb-4">
          <span className="px-4 py-1 rounded-full bg-purple-600 text-white text-sm uppercase tracking-wide">
            Services
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          TRANSFORMING BUSINESSES <br /> WITH AI & DIGITAL SOLUTIONS
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 z-10 relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md transition-transform hover:-translate-y-2 hover:shadow-purple-500/20"
            >
              <div className="mb-4">
                <img src={service.icon} alt={service.title} className="mx-auto" />
              </div>
              <h5 className="font-semibold text-lg mb-3">{service.title}</h5>
              <ul className="text-sm text-gray-300 space-y-1 text-left">
                {service.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Glow Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-600 opacity-20 blur-3xl z-0" />
    </section>
  );
};

export default Services;
