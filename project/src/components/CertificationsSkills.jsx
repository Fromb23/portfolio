import React from 'react';
import { BookOpen, Server, Database, Shield, Zap, Code, Cloud, Terminal } from 'lucide-react';

const CertificationsSkills = () => {
  // Backend skills data
  const backendSkills = [
    {
      category: "API Development",
      icon: <Code className="text-accent" size={24} />,
      skills: ["RESTful APIs", "GraphQL", "WebSocket/Socket.io", "gRPC"],
      description: "Designing and implementing efficient, scalable APIs with proper authentication, rate limiting, and documentation."
    },
    {
      category: "Database Management",
      icon: <Database className="text-accent" size={24} />,
      skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
      description: "Designing optimized database schemas, writing efficient queries, and implementing caching strategies."
    },
    {
      category: "DevOps & Deployment",
      icon: <Cloud className="text-accent" size={24} />,
      skills: ["Docker", "Kubernetes", "CI/CD Pipelines", "AWS/Google Cloud"],
      description: "Containerizing applications, setting up deployment pipelines, and managing cloud infrastructure."
    },
    {
      category: "System Architecture",
      icon: <Server className="text-accent" size={24} />,
      skills: ["Microservices", "Message Queues", "Load Balancing", "Caching Strategies"],
      description: "Designing scalable, maintainable system architectures with proper separation of concerns."
    },
    {
      category: "Security & Authentication",
      icon: <Shield className="text-accent" size={24} />,
      skills: ["JWT", "OAuth 2.0", "Encryption", "Rate Limiting"],
      description: "Implementing robust security measures, authentication flows, and data protection protocols."
    },
    {
      category: "Performance Optimization",
      icon: <Zap className="text-accent" size={24} />,
      skills: ["Query Optimization", "Caching", "Load Testing", "Monitoring"],
      description: "Identifying and resolving performance bottlenecks through profiling and optimization techniques."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Backend Skills Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center">
              <Terminal className="mr-3 text-accent" size={32} />
              Backend Engineering Expertise
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Building robust, scalable server-side solutions with modern technologies and best practices.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-theme mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">My Backend Development Philosophy</h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  As a backend developer, I specialize in creating the foundation that powers applications—the server, 
                  database, and application logic that users never see but always rely on. My approach combines 
                  technical excellence with practical solutions that scale.
                </p>
                <p className="text-secondary leading-relaxed">
                  I believe in building systems that are not just functional but resilient, maintainable, and 
                  efficient. From designing database schemas to implementing authentication systems and creating 
                  comprehensive API documentation, I focus on the details that make applications robust and reliable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <div className="text-accent text-3xl font-bold mb-1">99.9%</div>
                  <div className="text-sm text-primary">Uptime Reliability</div>
                </div>
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <div className="text-accent text-3xl font-bold mb-1">200ms</div>
                  <div className="text-sm text-primary">Avg. Response Time</div>
                </div>
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <div className="text-accent text-3xl font-bold mb-1">10K+</div>
                  <div className="text-sm text-primary">API Requests/Hour</div>
                </div>
                <div className="bg-secondary p-4 rounded-lg text-center">
                  <div className="text-accent text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-primary">Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-theme hover:shadow-theme-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{skill.category}</h3>
                </div>
                <p className="text-secondary mb-4 text-sm leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Backend Engineering Details */}
          <div className="mt-12 bg-card rounded-xl p-8 shadow-theme">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Comprehensive Backend Implementation</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-primary mb-4 flex items-center">
                  <Server className="mr-2 text-accent" size={20} />
                  API Development & Integration
                </h4>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Designed and implemented <strong>RESTful APIs</strong> with proper status codes, error handling, and versioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Built <strong>GraphQL</strong> schemas and resolvers for efficient data fetching with Apollo Server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Implemented real-time features with <strong>WebSockets</strong> and Socket.io for live updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Created comprehensive API documentation with Swagger/OpenAPI specifications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary mb-4 flex items-center">
                  <Database className="mr-2 text-accent" size={20} />
                  Database & Infrastructure
                </h4>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Designed optimized database schemas and implemented efficient query patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Containerized applications with <strong>Docker</strong> and managed multi-container environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Implemented <strong>global error handlers</strong> and structured logging systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Set up monitoring, alerting, and performance tracking for production systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-secondary rounded-lg border-l-4 border-accent">
              <div className="flex items-start">
                <BookOpen className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-primary">
                  <strong>My goal as a backend engineer</strong> is to build systems that are not just functional but 
                  exceptional—scalable architectures that handle growth, secure implementations that protect data, 
                  and efficient code that delivers performance. I'm committed to writing clean, maintainable code 
                  and implementing best practices that stand the test of time and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSkills;