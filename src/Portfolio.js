import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Calendar, ExternalLink, Download, Code, Briefcase, ChevronDown, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [resumeError, setResumeError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

/*
  const downloadResume = async () => {
    try {
      // Try to read the uploaded resume file
      if (window.fs && window.fs.readFile) {
        // This would work if there's an uploaded file - replace 'resume.pdf' with actual filename
        const resumeData = await window.fs.readFile('resume.pdf');
        const blob = new Blob([resumeData], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Kartik_Jha_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        // Fallback - you would replace this with your actual resume URL
        const link = document.createElement('a');
        link.href = '/Kartik_Jha_Resume.pdf';
        link.download = 'Kartik_Jha_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      setResumeError(true);
      console.error('Resume download failed:', error);
      // You could show a message to the user here
    }
  };
*/
const downloadResume = () => {
  try {
    const link = document.createElement('a');
    link.href = '/Kartik_Jha_Resume.pdf';  // GitHub Pages will serve this
    link.download = 'Kartik_Jha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    setResumeError(true);
    console.error('Resume download failed:', error);
  }
};

  // Projects - Update these with your actual projects
  const projects = [
    {
      title: "Load Test Util",
      description: "A powerful load-testing tool designed to simulate heavy load scenarios via json config through CLI. Logging and summarizing API and DB metrics. Currently supports MongoDB (more databases to be added soon). Contributions are welcome",
      tech: ["Javascript", "NPM"],
      liveLink: "https://www.npmjs.com/package/load_test_util",
      codeLink: "https://github.com/KartikJha/load_test_util",
      npmLink: "https://www.npmjs.com/package/load_test_util",
      featured: true
    },
    {
      title: "Chrome AI Summarizer",
      description: "This Chrome extension leverages built-in Chrome AI capabilities to streamline the process of extracting and summarizing content from web pages. Designed for professionals, researchers, and avid readers, the extension simplifies content consumption by providing concise summaries, saving users time and effort",
      tech: ["Javascript", "HTML", "Chrome Extension Runtime"],
      liveLink: "https://chromewebstore.google.com/detail/kmpanchfjndhbcmpfiekpfhmkconjabe?utm_source=item-share-cb",
      codeLink: "https://github.com/KartikJha/chrome-ai-extension-prototype",
      npmLink: null,
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API with JWT authentication, role-based access control, and real-time notifications using WebSocket.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Socket.io", "Docker"],
      liveLink: null,
      codeLink: "https://github.com/KartikJha/task-api",
      npmLink: null,
      featured: false
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data visualization with custom charts, real-time updates, and export functionality.",
      tech: ["Next.js", "D3.js", "Chart.js", "Redis", "WebSocket"],
      liveLink: "https://dashboard-demo.com",
      codeLink: "https://github.com/KartikJha/data-dashboard",
      npmLink: null,
      featured: false
    },
    {
      title: "Mobile-First PWA",
      description: "Progressive Web App with offline functionality, push notifications, and native-like experience.",
      tech: ["React", "PWA", "Service Workers", "IndexedDB", "Web Push API"],
      liveLink: "https://pwa-demo.com",
      codeLink: "https://github.com/KartikJha/mobile-pwa",
      npmLink: null,
      featured: false
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices setup with API gateway, service discovery, and comprehensive monitoring.",
      tech: ["Node.js", "Docker", "Kubernetes", "NGINX", "Prometheus"],
      liveLink: null,
      codeLink: "https://github.com/KartikJha/microservices-template",
      npmLink: null,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold hover:text-blue-600 transition-colors"
            >
              Kartik Jha
            </button>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Full-Stack Engineer
            <span className="block text-blue-600 mt-2">& Problem Solver</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Passionate about building scalable web applications with modern technologies. 
            I create elegant solutions to complex problems.
          </p>
          
          {/* Developer Info Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/kartik-j-31074b170/" // Update with your actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.toptal.com/resume/kartik-jha" // Update with your actual Toptal profile
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <Briefcase className="w-4 h-4" />
              Toptal
            </a>
            <a
              href="https://github.com/KartikJha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">About Me</h2>
            <div className="w-24 h-px bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating scalable applications that solve real-world problems and deliver 
                exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <a
                onClick={downloadResume}
                style={{cursor: "pointer"}}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              
              {resumeError && (
                <p className="text-sm text-red-600 mt-2">
                  Resume download temporarily unavailable. Please contact me directly.
                </p>
              )}
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Node.js', 
                    'Express.js', 'Python', 'FASTApi', 'MongoDB', 'PostgreSQL', 'Linux Administration', 'K8S', 'AWS'
                  ].map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                  Focus Areas
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div>• Full-Stack Web Development</div>
                  <div>• System Architecture & Design</div>
                  <div>• API Development & Integration</div>
                  <div>• Performance Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Featured Projects</h2>
            <div className="w-24 h-px bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects showcasing my technical skills and problem-solving approach
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed" style={{minHeight: "130px"}}>{project.description}</p>
                 <div> 
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                    >
                      <Code className="w-4 h-4" />
                      Source Code
                    </a>
                    {project.npmLink && (
                      <a
                        href={project.npmLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        NPM Package
                      </a>
                    )}
                  </div>
              </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-light mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">{project.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack - Show only first 3 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 text-sm">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Code className="w-3 h-3" />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4">Let's Connect</h2>
          <div className="w-24 h-px bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, challenging projects, 
            or just having a conversation about technology. Don't hesitate to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:your.email@example.com" // Update with your actual email
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="https://calendly.com/your-schedule" // Update with your actual Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Or find me on social media
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://github.com/KartikJha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/your-profile" // Update with your actual LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kartik Jha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
