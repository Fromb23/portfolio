import React, { useState } from 'react';
import {
  Globe, Smartphone, Database, Code, Layers, ArrowRight,
  ExternalLink, Server, Cloud, Terminal, Type, Cpu,
  Figma, Github, X, ChevronLeft, ChevronRight, BookOpen,
  Book, Users, Car, ShoppingCart, Calendar
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "CTerm2025",
      description: "A comprehensive Learning Management System inspired by ALX, designed to simulate the Checker program and provide a disciplined, structured environment for learning software engineering.",
      images: [
        "/cterm/cterm1.png",
        "/cterm/cterm2.png",
        "/cterm/cterm3.png",
        "/cterm/cterm4.png",
        "/cterm/cterm5.png",
        "/cterm/cterm6.png",
        "/cterm/cterm7.png",
        "/cterm/cterm8.png",
        "/cterm/cterm9.png"
      ],
      technologies: ["C", "Linux", "Bash", "React", "TailwindCSS", "Django", "MySQL"],
      liveUrl: "",
      githubUrl: "https://github.com/Fromb23/CTerm2025",
      status: "In Development",
      category: "Learning Management System",
      details: "CTerm2025 is an ambitious LMS project built to replicate and extend the functionality of the ALX Checker program while offering a complete environment for structured learning in software engineering and other technical fields. At its core, it automates assignment evaluation by cloning repositories, running tests, and providing real-time feedback on learner submissions, emphasizing discipline and correctness in coding practices. The platform introduces user and course management modules, enabling administrators to onboard learners, assign courses, and monitor progress. Students can engage with curated tasks, receive instant feedback, and track their growth, while instructors gain tools for oversight and reporting. Although still in active development, with user and course backends being the most enhanced features so far, CTerm2025 is envisioned as a fully immersive LMS that instills rigor, accountability, and consistency in technical education, closely mirroring the structured approach of ALX."
    },
    {
      title: "Teaching Practice Management System (TPMS)",
      description: "A comprehensive system for managing teaching practice programs, student placements, and evaluation processes for educational institutions.",
      images: [
        "/tpms/tpms1.png",
        "/tpms/tpms2.png",
        "/tpms/tpms3.png",
        "/tpms/tpms4.png",
        "/tpms/tpms5.png",
        "/tpms/tpms6.png",
        "/tpms/tpms7.png",
        "/tpms/tpms8.png",
        "/tpms/tpms9.png",
        "/tpms/tpms10.png",
        "/tpms/tpms11.png",
        "/tpms/tpms12.png",
        "/tpms/tpms13.png"
      ],
      technologies: ["React", "Node.js", "MySQL", "Express", "TailwindCSS"],
      liveUrl: "",
      githubUrl: "https://github.com/Fromb23/TPMS",
      status: "In Development",
      category: "Education Technology",
      details: "The Teaching Practice Management System (TPMS) is a comprehensive solution designed to streamline and digitize the entire teaching practice process for student teachers, lecturers, and school administrators. It manages every stage from student placement to supervision and final evaluation, ensuring accountability, transparency, and efficiency. Student teachers can easily track their progress and feedback, lecturers are able to supervise performance in real time and generate automated reports, while administrators oversee placements and monitor overall compliance. By eliminating gaps such as missing marks and enhancing communication between stakeholders, TPMS guarantees a smooth, well-coordinated teaching practice experience from start to finish."
    },
    {
      title: "Recursion Readme",
      description: "A program written in C to automatically evaluate and mark student programming projects directly from their GitHub repositories.",
      images: [
        "/checker/checker1.png",
        "/checker/checker2.png",
        "/checker/checker3.png",
        "/checker/checker4.png",
        "/checker/checker5.png"
      ],
      technologies: ["C", "GitHub API", "Makefile", "Shell Scripting"],
      liveUrl: "",
      githubUrl: "https://github.com/Fromb23/recursion-readme/tree/main/checker",
      status: "In Development",
      category: "Education Tools",
      details: "Recursion-Readme is a project I initiated to mentor and support learners pursuing Software Engineering by addressing the challenge of providing timely, precise, and consistent feedback on their programming assignments. Inspired by the Checker system I used at ALX, I developed this tool in C to automatically clone learners’ repositories from GitHub, evaluate their work against task requirements, and return real-time error feedback. Beyond basic correctness, the system integrates linters, main files, and automated tests, reinforcing discipline, consistency, and the principle that programming must be done the right way. While still under development, its potential has already exceeded my expectations, demonstrating how automation can enhance mentorship without compromising quality. More importantly, the project embodies my belief that engineering education thrives on structure and discipline. Recursion-Readme also inspired the creation of a larger initiative, cTerms2025, a learning management system modeled after the ALX LMS, further extending my commitment to fostering rigorous and impactful software engineering education."
    },
    {
      title: "Sports Academy Management System",
      description: "A co-curricular activities management system for sports academies to manage schedules, players, teams, and events efficiently.",
      images: [
        "/sports/sports1.png",
        "/sports/sports2.png",
        "/sports/sports3.png",
        "/sports/sports4.png",
        "/sports/sports5.png",
        "/sports/sports6.png",
        "/sports/sports7.png",
        "/sports/sports8.png",
        "/sports/sports9.png",
        "/sports/sports10.png",
        "/sports/sports11.png",
        "/sports/sports12.png",
        "/sports/sports13.png",
        "/sports/sports14.png"

      ],
      technologies: ["React", "MySQL", "Tailwind CSS", "Nodejs", "Express"],
      liveUrl: "",
      githubUrl: "https://github.com/Fromb23/co-curliculum-activities-ms",
      status: "Live",
      category: "Sports Management",
      details: "The Sports Academy Management System is a comprehensive platform I designed to streamline the operations of a sports academy, inspired by the vision of a friend who aspired to establish a football academy and training arena. After researching how academies operate, I developed a system that supports three key user roles: Admin, Trainer, and Student (Trainee). The Admin serves as the overall manager, responsible for creating and scheduling sports activities, assigning trainers to students, managing payments, and overseeing the entire system. Trainers have access to a dedicated dashboard where they can view assigned trainees, manage training sessions, track performance, provide feedback, and communicate through announcements or one-on-one messaging. Students, on the other hand, access their personalized dashboards to view schedules, monitor progress, receive reports, communicate with trainers and peers, and stay updated through announcements. Beyond core management, the platform integrates communication, performance tracking, and scheduling into a unified system, ensuring that academy operations are efficient, transparent, and engaging for all stakeholders."
    },
    {
      title: "Luxride - Car Booking System",
      description: "A premium car booking and rental platform offering luxury vehicles with seamless booking experience and customer support.",
      images: [
        "/luxride/luxride1.png",
        "/luxride/luxride2.png",
        "/luxride/luxride3.png",
        "/luxride/luxride4.png",
        "/luxride/luxride5.png",
        "/luxride/luxride6.png",
        "/luxride/luxride7.png",
        "/luxride/luxride8.png",
        "/luxride/luxride9.png",
        "/luxride/luxride10.png",
        "/luxride/luxride11.png",
        "/luxride/luxride12.png",
        "/luxride/luxride13.png",
        "/luxride/luxride14.png",
        "/luxride/luxride15.png",
        "/luxride/luxride16.png",
      ],
      technologies: ["React", "Django", "MySQL", "CDN Tailwind"],
      liveUrl: "",
      githubUrl: "https://github.com/Fromb23/luxride",
      status: "In Development",
      category: "Transportation",
      details: "The LuxRide Platform is an end-to-end luxury car rental system designed to deliver a seamless and premium booking experience for guests while providing powerful management tools for administrators. Initially inspired by a friend’s vision to offer hotel guests a convenient way to book vehicles, LuxRide extends far beyond simple reservations. Guests can create accounts, browse an elegant catalog of vehicles, view availability in real time, and book rides with flexible scheduling and secure payment options. On the other side, administrators manage the entire fleet with ease — from adding and updating vehicles to tracking bookings, monitoring payments, and overseeing customer interactions. The system also integrates customer relationship management (CRM) features, ensuring personalized service, timely communication, and a streamlined guest experience. By combining advanced booking capabilities with robust vehicle and customer management, LuxRide not only simplifies operations but also elevates the standard of luxury transport, making it the perfect bridge between hospitality and high-end mobility."
    },
    {
      title: "Olympic High School Alumni Page",
      description: "A dedicated static website created to honor and professionalize the alumni association of Olympic High School.",
      images: [
        "/ohs/ohs1.png",
        "/ohs/ohs2.png",
        "/ohs/ohs3.png",
      ],
      technologies: ["Next.js", "Tailwind CSS", "React", "EmailJS"],
      liveUrl: "https://ohs-1-z3o6.onrender.com/",
      githubUrl: "https://github.com/Fromb23/OHS",
      status: "Live",
      category: "Static Website",
      details: "The Olympic Alumni Page is a dedicated static website created to honor and professionalize the alumni association of Olympic High School. Inspired by a deep sense of pride and belonging as an alumnus, I designed this platform as a way of giving back to the community that shaped me. The site serves as a digital hub where alumni can connect, share updates, and celebrate the legacy of the school. By offering a clean, accessible, and professional online presence, it strengthens alumni identity and fosters lasting engagement among graduates."
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Education Technology":
      case "Education Tools":
        return <BookOpen size={20} />;
      case "System Programming":
        return <Terminal size={20} />;
      case "Sports Management":
        return <Users size={20} />;
      case "Transportation":
        return <Car size={20} />;
      case "E-Commerce":
        return <ShoppingCart size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center">
            <Terminal className="mr-3 text-accent" size={32} />
            My Projects
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Here are some of the projects I've built, showcasing my skills across different domains
            and technologies. Each represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-theme hover:shadow-theme-lg transition-all hover:-translate-y-2 group cursor-pointer" onClick={() => openProjectModal(project)}>
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-on-accent text-xs font-bold rounded-full">
                  {project.status}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-card p-3 rounded-full text-accent">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-accent mr-2">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-xs text-secondary font-medium">{project.category}</span>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">View details</span>
                  <div className="flex gap-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className="p-2 bg-gray-200 text-gray-500 rounded-full cursor-not-allowed" title="Still in Development">
                        <ExternalLink size={16} />
                      </span>
                    )}
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 z-10 p-2 bg-card rounded-full text-primary hover:text-accent transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Carousel */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-accent' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex items-center mb-2">
                  <div className="text-accent mr-2">
                    {getCategoryIcon(selectedProject.category)}
                  </div>
                  <span className="text-sm text-secondary font-medium">{selectedProject.category}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${selectedProject.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {selectedProject.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">{selectedProject.title}</h3>
              <p className="text-secondary mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">About This Project</h4>
                <p className="text-secondary">{selectedProject.details}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-accent text-on-accent rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed">
                    <ExternalLink size={18} className="mr-2" />
                    Still in Development
                  </span>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;