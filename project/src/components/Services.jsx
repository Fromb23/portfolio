import React, { useState } from 'react';
import { Globe, Database, Code, Layers, ArrowRight, X, Cpu, Users } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue.js.",
      icon: <Globe size={32} />,
      features: ["Responsive Design", "SEO Optimization", "State Management", "Performance Focused"],
      details: {
        technologies: ["React", "Next.js", , "CSS", "Templates", "TypeScript", "Tailwind CSS"],
        approach: "I build responsive, accessible web applications with a focus on performance and user experience. From single-page applications to complex enterprise solutions.",
        projects: "E-commerce platforms, SaaS applications, business websites, and progressive web apps"
      }
    },
    {
      title: "System Engineering",
      description: "Low-level programming and system solutions using C for performance-critical applications.",
      icon: <Cpu size={32} />,
      features: ["Low-Level Programming", "Performance Optimization", "System Architecture", "Memory Management"],
      details: {
        technologies: ["Linux", "C", "Python", "Bash scripting"],
        approach: "Developing efficient system software, embedded systems, and high-performance applications. Specializing in memory management, algorithm optimization, and cross-platform compatibility.",
        projects: "System utilities, embedded firmware, performance-critical applications, and cross-platform libraries"
      }
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Django, and databases.",
      icon: <Database size={32} />,
      features: ["API Development", "Database Design", "Cloud Integration"],
      details: {
        technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "MySQL", "Docker"],
        approach: "Building scalable backend architectures with RESTful and GraphQL APIs. Experience with microservices, authentication systems, and database optimization.",
        projects: "REST APIs, real-time applications, database management systems, and Learner Management systems"
      }
    },
    {
      title: "Mentoring & Tutoring",
      description: "Guidance and support for aspiring developers through structured learning paths and code reviews.",
      icon: <Users size={32} />,
      features: ["Code Reviews", "Learning Paths", "Career Guidance"],
      details: {
        technologies: ["Object Oriented Programming","Procedural Programming", "Data Structures", "Algorithms", "System Design", "Best Practices"],
        approach: "I offer personalized mentoring sessions to help newcomers navigate the tech landscape. From foundational programming concepts to advanced system design and interview preparation.",
        projects: "One-on-one mentoring, code review sessions, project guidance, and career counseling"
      }
    }
  ];

  const handleServiceClick = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <section id="services" className="py-20 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center">
            <Layers className="mr-3 text-accent" size={32} />
            My Services
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            I offer comprehensive development services and mentoring to help bring your ideas to life.
            From concept to deployment, I've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div
                className={`bg-card p-6 rounded-xl shadow-theme transition-all duration-300 ${expandedService === index
                    ? 'rounded-b-none z-10 absolute left-0 right-0'
                    : 'hover:shadow-theme-lg hover:-translate-y-2 cursor-pointer'
                  }`}
                onClick={() => handleServiceClick(index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-accent transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  {expandedService === index ? (
                    <X
                      size={24}
                      className="text-accent cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedService(null);
                      }}
                    />
                  ) : (
                    <ArrowRight className="text-accent transform transition-transform group-hover:translate-x-1" />
                  )}
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-secondary mb-4 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-secondary flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {expandedService === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                    <h4 className="font-semibold text-primary mb-2">Technologies I Use:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.details.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-primary mb-2">My Approach:</h4>
                    <p className="text-secondary text-sm mb-4">{service.details.approach}</p>

                    <h4 className="font-semibold text-primary mb-2">Project Examples:</h4>
                    <p className="text-secondary text-sm">{service.details.projects}</p>
                  </div>
                )}

                {expandedService !== index && (
                  <div className="text-accent text-sm font-medium flex items-center mt-4">
                    View details
                  </div>
                )}
              </div>

              {/* Spacer to maintain layout when expanded */}
              {expandedService === index && <div className="h-64"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay when a service is expanded */}
      {expandedService !== null && (
        <div
          className="fixed inset-0 bg-black/30 z-0"
          onClick={() => setExpandedService(null)}
        />
      )}
    </section>
  );
};

export default Services;