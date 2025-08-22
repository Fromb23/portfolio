import React from 'react';
import { Calendar, Award, Heart, BookOpen, User, Zap, Code, Database, Smartphone, Globe } from 'lucide-react';

const AboutMe = () => {

  const stats = [
    { value: '1+', label: 'Years Coding', icon: <Calendar className="text-accent" size={20} /> },
    { value: '10+', label: 'Projects Built', icon: <Award className="text-accent" size={20} /> },
    { value: '100%', label: 'Dedication', icon: <Heart className="text-accent" size={20} /> },
    { value: '∞', label: 'Curiosity', icon: <BookOpen className="text-accent" size={20} /> }
  ];

  const skills = [
    { icon: <Code className="mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" size={24} />, label: "Full-Stack" },
    { icon: <Database className="mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" size={24} />, label: "Databases" },
    { icon: <Smartphone className="mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" size={24} />, label: "System Design" },
    { icon: <Globe className="mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" size={24} />, label: "DevOps" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Code Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-theme-lg border-4 border-accent animate-float">
                <img
                  src="logo.jpg"
                  alt="Francis Rombo"
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-on-accent px-4 py-2 rounded-full font-bold shadow-theme-lg flex items-center">
                <Zap size={16} className="mr-1" fill="currentColor" />
                ALX-Grad
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary flex items-center">
              <User className="mr-3 text-accent" size={32} />
              My Journey
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              My fascination with technology began in childhood, though I lacked guidance on where to channel that curiosity.
              Inspired by movies, I envisioned myself working with computers, and by high school, I was determined to pursue
              this path—even insisting on switching to a class that offered Computer Studies.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Despite academic roadblocks that initially prevented me from studying Computer Science at university,
              I refused to abandon my dream. While pursuing a BSc in Education, I dedicated myself to self-learning
              through online resources until discovering ALX—a transformative opportunity that provided structure,
              mentorship, and the challenge I needed to thrive.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-4 rounded-lg shadow-theme text-center hover:shadow-theme-lg transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-primary">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary flex items-center">
                <Award className="mr-2 text-accent" size={24} />
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg shadow-theme text-center hover:shadow-theme-lg transition-all hover:-translate-y-1 group"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium text-primary">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-secondary leading-relaxed">
              My journey proves that passion and perseverance can overcome institutional barriers. Today,
              I'm a full-stack developer specializing in web development, OOP, system programming, and DevOps—constantly
              learning, growing, and embracing new challenges. My mathematical background from university studies
              enhances my problem-solving abilities, particularly with algorithms and data structures.
            </p>

            <p className="text-lg text-secondary leading-relaxed font-medium">
              I believe that when you're truly dedicated to something, you'll find a way against all odds—
              and my story is just beginning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;