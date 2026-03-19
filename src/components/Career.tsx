import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E Information Technology</h4>
                <h5>Shree L.R. Tiwari College of Engineering, Mumbai University</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Pursuing undergraduate degree in Information Technology. 
              Gained foundational knowledge in web development, databases, 
              and software engineering principles.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>TechnoHacks Solutions Pvt. Ltd</h5>
              </div>
              <h3>Jan 2026</h3>
            </div>
            <p>
              Worked on a task management platform using MERN stack. 
              Implemented user authentication and role-based access control. 
              Built REST APIs and integrated MongoDB for efficient CRUD operations.
            </p>
          </div>

          {/* Training / Live Cohort */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development Training (Live Cohort 2.0)</h4>
                <h5>Sheryains Coding School – Aman</h5>
              </div>
              <h3>2025 - 2026 </h3>
            </div>
            <p>
              Completed live full-stack development training, covering 
              React.js, Node.js, Express.js, MongoDB, and modern web 
              development practices.
            </p>
          </div>

          {/* Current Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ongoing Projects</h4>
                <h5>Multiple Full Stack Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working on personal and real-world projects 
              using MERN stack, focusing on building scalable web 
              applications with authentication, responsive UI, and 
              efficient backend logic.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;