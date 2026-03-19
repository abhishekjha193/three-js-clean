import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Moodify",
    category: "Real-Time Emotion-Aware Music Player",
    tools: "React.js, Node.js, Express.js, MongoDB, Redis",
    image: "./4.png",
    github: "https://github.com/abhishekjha193/Moodify-ai-music-player",
    live: "",
  },
   {
    title: "Zindigo",
    category: "Social Media Web App",
    tools: "React.js, Node.js, Express.js, MongoDB, JWT",
    image: "./1.png",
    github: "https://github.com/abhishekjha193/Zindigo-Application",
    live: "",
  },
  {
    title: "MacFolio OS",
    category: "Web-Based macOS Style Portfolio",
    tools: "React.js, CSS, HTML5, PDF Viewer, Audio Player",
    image: "./5.png",
    github: "https://github.com/abhishekjha193/MacFolio-OS",
    live: "",
  },
  {
    title: "Employee Management Module",
    category: "Full Stack MERN Project",
    tools: "React.js, Node.js, Express.js, MongoDB, JWT, Multer",
    image: "./3.png", 
    github: "https://github.com/abhishekjha193/Employee-Management-Module",
    live: "",
  },
  {
    title: "Mini Figma",
    category: "Web-Based Design Editor",
    tools: "HTML5, CSS3, JavaScript (Vanilla), LocalStorage",
    image: "./2.png", 
    github: "https://github.com/abhishekjha193/Mini-Figma",
    live: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.title}
                          </a>
                        </h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WorkImage image={project.image} alt={project.title} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;