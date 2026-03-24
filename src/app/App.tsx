import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Facebook, GraduationCap, Briefcase, Code, Users, BookOpen, ZoomIn } from 'lucide-react';
import profilePhoto from "../assets/7658c36f12f564bcd10ceda5646bfed931e888ef.png";
import notreDameLogo from "../assets/b15431081e0a7e4ce331b8abacfee7394b912572.png";
import ateneoLogo from "../assets/aeac2818b970f4ec630250757c0a57cf20a9a794.png";
import whiteBeltMedal from "../assets/aed204c865a0263e8a5d78eca2d453edfdce9fc4.png";
import ciscoCert from "../assets/53ede9008fb34bee915b79a2708653ed2b2d3b8d.png";
import nexusCert from "../assets/35287761612ef312a32ada5a8599e5b481d0d0c4.png";
import whiteBeltCert from "../assets/d95d23a85e6faf96473aae974e5bd6d10bfe2d5b.png";
import yellowBeltCert from "../assets/335038b3118ace8a197ffe18d24cf3fbaaf41c14.png";
import adduCert from "../assets/409063ebf0e3d59e13b5b6f9bcded2110f4f9f0f.png";
import adduAlumniImage from "../assets/9fa7eec5991d3b249769d24bf623a89cc57bbf6c.png";
import nonoyLavinaImage from "../assets/e74dfe10ad699b7a76b24387566f1c3d5d70321f.png";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200 transition-all"
          >
            <X size={24} className="text-gray-900" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full bg-slate-900 text-white w-72 transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 shadow-2xl`}
      >
        <div className="flex flex-col items-center p-8 h-full overflow-y-auto">
          {/* Profile Photo */}
          <div className="relative group mb-6">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl">
              <img
                src={profilePhoto}
                alt="Jessa Orcine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2 text-center">Jessa Orcine</h2>
          <p className="text-gray-300 text-center text-base mb-8 font-medium">BS Information Systems</p>

          {/* Navigation Menu */}
          <nav className="w-full">
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'ABOUT', icon: <Users size={20} /> },
                { id: 'education', label: 'EDUCATION & CERTIFICATIONS', icon: <GraduationCap size={20} /> },
                { id: 'projects', label: 'PROJECTS', icon: <Briefcase size={20} /> },
                { id: 'skills', label: 'SKILLS', icon: <Code size={20} /> },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-gray-300 hover:text-white hover:bg-indigo-600 transition-all rounded-lg text-left font-medium shadow-sm hover:shadow-md"
                  >
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm leading-tight font-semibold">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-12">
          <div className="max-w-5xl w-full">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 border border-gray-200">
              <div className="mb-8">
                <p className="text-indigo-600 text-sm font-semibold mb-2 uppercase tracking-wide">Portfolio</p>
                <h1 className="text-5xl md:text-6xl mb-4 text-gray-900">Jessa Orcine</h1>
                <p className="text-xl text-gray-600">3rd Year BS Information Systems Student</p>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="p-2 bg-indigo-600 rounded-lg">
                    <Mail size={18} className="text-white" />
                  </div>
                  <a href="mailto:orcinejessa57@gmail.com" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors truncate">
                    orcinejessa57@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="p-2 bg-indigo-600 rounded-lg">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-700">+63 905 149 0081</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="p-2 bg-indigo-600 rounded-lg">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-700">Davao City, Philippines</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://github.com/jessa0122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all text-sm font-medium"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jessa-orcine-0000a2395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/jessa.orcine.9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-sm font-medium"
                >
                  <Facebook size={18} />
                  Facebook
                </a>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6 py-2">
                <p className="text-gray-700 leading-relaxed">
                  My interests are in bridging business needs and technology solutions, improving processes, and creating efficient, user-centered systems. I am passionate about using technology to support decision-making and organizational growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-white">
          <div className="max-w-5xl w-full">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap size={28} className="text-indigo-600" />
                <h2 className="text-4xl md:text-5xl text-gray-900">Education</h2>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-indigo-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-gray-200">
                    <img src={ateneoLogo} alt="Ateneo de Davao University" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">Bachelor of Science in Information System</h3>
                    <p className="text-indigo-600 mb-2">Ateneo de Davao University</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Ongoing: 3rd Year Student</span>
                    </div>
                    <p className="text-gray-600 mt-3">
                      Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-purple-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-gray-200">
                    <img src={notreDameLogo} alt="Notre Dame of Dadiangas University" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">Senior High School - ABM</h3>
                    <p className="text-purple-600 mb-2">Notre Dame of Dadiangas University - Marist Avenue</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Graduated: 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-pink-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex items-center justify-center border border-gray-200">
                    <img src={notreDameLogo} alt="Notre Dame of Dadiangas University" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">Primary School</h3>
                    <p className="text-pink-600 mb-2">Notre Dame of Dadiangas University - IBED</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Graduated: 2017</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="mt-12 mb-6">
                <h3 className="text-4xl md:text-5xl text-gray-900 flex items-center gap-3">
                  <span className="text-3xl md:text-4xl">🏆</span>
                  Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-blue-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(ciscoCert)}
                >
                  <div className="mb-4">
                    <img src={ciscoCert} alt="Discovering Entrepreneurship Certificate" className="w-full h-48 object-contain rounded-lg" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">Discovering Entrepreneurship</h4>
                      <p className="text-blue-600 text-sm">Cisco Networking Academy</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-indigo-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(adduCert)}
                >
                  <div className="mb-4">
                    <img src={adduCert} alt="Digital Infrastructure Innovation Certificate" className="w-full h-48 object-contain rounded-lg" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">Digital Infrastructure Innovation</h4>
                      <p className="text-indigo-600 text-sm">Ateneo de Davao University - Webinar</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-yellow-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(yellowBeltCert)}
                >
                  <div className="mb-4">
                    <img src={yellowBeltCert} alt="Yellow Belt Certification" className="w-full h-48 object-contain rounded-lg" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🥇</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">Yellow Belt Certification</h4>
                      <p className="text-yellow-600 text-sm">Lean Six Sigma Training</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-gray-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(whiteBeltCert)}
                >
                  <div className="mb-4">
                    <img src={whiteBeltCert} alt="White Belt Certification" className="w-full h-48 object-contain rounded-lg" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-slate-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🥇</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">White Belt Certification</h4>
                      <p className="text-gray-600 text-sm">Lean Six Sigma</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-l-4 border-orange-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedImage(nexusCert)}
                >
                  <div className="mb-4">
                    <img src={nexusCert} alt="New Energy Nexus Philippines Certificate" className="w-full h-48 object-contain rounded-lg" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-2">Techstars Startup Weekend</h4>
                      <p className="text-orange-600 text-sm">New Energy Nexus Philippines - Participant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gray-50">
          <div className="max-w-5xl w-full">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase size={28} className="text-indigo-600" />
                <h2 className="text-4xl md:text-5xl text-gray-900">Projects</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="mb-4 overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(nonoyLavinaImage)}>
                  <img
                    src={nonoyLavinaImage}
                    alt="Nonoy Laviña Trucking Services"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-2xl mb-2 text-gray-900">Nonoy Laviña Trucking Services</h3>
                <p className="text-indigo-600 mb-3 text-sm font-medium">Frontend Developer</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A modern web application for trucking services built with cutting-edge frontend technologies, featuring responsive design and accessible UI components.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">React 19</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">Vite</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">Tailwind CSS 4</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">Radix UI</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="mb-4 overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(adduAlumniImage)}>
                  <img
                    src={adduAlumniImage}
                    alt="AdDU Alumni Website"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-2xl mb-2 text-gray-900">AdDU Alumni Website</h3>
                <p className="text-indigo-600 mb-3 text-sm font-medium">Web Designer</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  An alumni portal for Ateneo de Davao University that connects graduates and facilitates networking. Features member profiles, event announcements, and data management systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">PHP</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-white">
          <div className="max-w-5xl w-full">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <Code size={28} className="text-indigo-600" />
                <h2 className="text-4xl md:text-5xl text-gray-900">Skills</h2>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl text-gray-900 mb-4 font-semibold">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white text-gray-700 text-sm rounded-md border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl text-gray-900 mb-4 font-semibold">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white text-gray-700 text-sm rounded-md border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl text-gray-900 mb-4 font-semibold">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Power BI'].map((tool) => (
                    <span key={tool} className="px-4 py-2 bg-white text-gray-700 text-sm rounded-md border border-gray-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl text-gray-900 mb-4 font-semibold">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Critical Thinking'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white text-gray-700 text-sm rounded-md border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white p-8 lg:ml-0">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm text-gray-400">© 2026 Jessa Orcine. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;