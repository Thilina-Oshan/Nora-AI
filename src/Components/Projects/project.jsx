import React from 'react';
import './project.css'; // if you have custom styles

const projectData = [
  {
    id: 1,
    title: "SAMPLE PROJECT NAME",
    category: "Sample Category",
    image: "/asset/img/Mask group.png"
  },
  {
    id: 2,
    title: "SAMPLE PROJECT NAME",
    category: "Sample Category",
    image: "/asset/img/Mask group.png"
  },
  {
    id: 3,
    title: "SAMPLE PROJECT NAME",
    category: "Sample Category",
    image: "/asset/img/Mask group.png"
  },
  {
    id: 4,
    title: "SAMPLE PROJECT NAME",
    category: "Sample Category",
    image: "/asset/img/Mask group.png"
  },
  // Add more items here
];

const ProjectsSection = () => {
  return (
    <section className="p-5" id="abouth">
      <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
        <div className="about-btn">
          <h3>Project</h3>
        </div>

        <h2 className="title-project">
          OUR WORK: INNOVATION IN ACTION
        </h2>

        {/* Project Grid */}
        <div className="container pb-5">
          <div className="row g-4">
            {projectData.map((project) => (
              <div className="col-md-3" key={project.id}>
                <div className="card bg-dark text-white border-0 rounded-4 shadow project-card">
                  <img
                    src="/src/assets/img/Mask group.png"
                    className="card-img-top rounded-top-4"
                    alt="Project"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="small text-muted rounded-pill category-pill d-inline-block mt-2">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center mt-5">
            <button className="btn custom-btn-pill">SEE MORE PROJECTS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
