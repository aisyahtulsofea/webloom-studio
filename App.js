import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
     setIsMenuOpen(false); // Closes the mobile menu after clicking
     }
  };

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu state

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };
    
    useEffect(() => {
      const observerOptions = {
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Grab all elements we want to animate
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup
   }, []);

  return (
    <div className="App">
      {/*Navigation bar*/}
      <nav className="navbar">
        <h2 style={{color: '#d14d72'}}>WeBloom Studio</h2>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navspace ${isMenuOpen ? 'active' : ''}`}>
          <span onClick={() => scrollToSection('home')}>Home</span> 
          <span onClick={() => scrollToSection('about')}>About</span>
          <span onClick={() => scrollToSection('services')}>Services</span> 
          <span onClick={() => scrollToSection('contact')}>Contact Us</span>
        </div>
      </nav>

      {/* Header Section */}
      <header className="App-header" id="home">
        <h1 className='reveal'>WeBloom Studio</h1>
        <p className='reveal'>Bloom Beautifully Together</p>
      </header>

      {/* Mission & Vision Section */}
      <section className="OurBackground reveal" id="about" style={{ padding: '20px' }}>
        <h2>Our Background</h2>
        <p className="introduction" style={{ maxWidth: '800px', margin: '0 auto'}}>WeBloom Studio is a women-led web design collective specializing in modern, high-impact digital experiences with a distinct Gen Z edge. Founded by three visionary graduates, our mission is to help brands evolve and "bloom" alongside us. By seamlessly blending bold creativity, data-driven strategy, and the latest technology, we build websites that aren't just aesthetically stunning—they are designed to drive community impact and sustainable growth.</p>
        
        <div className="details" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '50px'}}>
          <div className="mission reveal" style={{flex:1 , maxWidth: '400px', margin: '0 auto' }}>
            <h3><strong>Mission</strong> </h3>
            <p>We exist to help brands bloom. By fusing Gen Z intuition with professional web strategy, we create digital experiences that leave a lasting impact.</p>
          </div>
          <div className="vision reveal" style={{flex:1 , maxWidth: '400px', margin: '0 auto' }}>
            <h3><strong>Vision</strong> </h3>
            <p>To be the leading creative studio for the next generation of business leaders, redefining the standard for what a modern website should look, feel, and achieve.</p>
          </div>
        </div>
        
        <div className='videoBack reveal'>
          <h3>Promotional Video</h3>
          <div className="video-container">
             <video width="100%" controls poster="/thumbnail.png">
                <source src="https://youtu.be/k0evu0HIpvs" type="video/mp4" />
             </video>
          </div>
        </div>
      </section>

      {/* Team Section */}
     <section className="Team" id="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <TeamMember 
            name="Aisyahtul Sofea" 
            role="Co-Founder & Technical Lead" 
            image="aisyah.png"
          />
          <TeamMember 
            name="Chaliesa Eyu Ching Mien" 
            role="Co-Founder & Creative Director" 
            image="chalie.jpeg"
          />
          <TeamMember 
            name="Afiza Syahira" 
            role="Co-Founder & Project Manager" 
            image="cera.jpeg"
         />
        </div>
      </section>

      {/* Products */}
      <section className="Products reveal" id="services" style={{ padding: '20px'}}>
        <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Services</h2>
        <div className="sevices-grid">
          <div className="Serv1-card reveal">
            <strong>Web Design</strong>
            <p>- Custom Websites with your desire design</p>
            <p>- User-friendly interface with trendy elements</p>
            <p>- Responsive and Interactive </p>
            <p><strong>RM 1000 - RM 20000</strong></p>
          </div>
          <div className="Serv2-card reveal">
            <strong>Portfolio and Branding</strong>
            <p>- Can be for personal or company uses</p>
            <p>- Can add multiple videos and pictures</p>
            <p>- Suitable package for events and exhibitions</p>
            <p><strong>RM 25000 - RM 80000</strong></p>
          </div>
          <div className="Serv3-card reveal">
            <strong>Web Designing Workshop</strong>
            <p>- Basic to Professional Web Designing website</p>
            <p>- Online or Physical, can be Both</p>
            <p>- Minimum 10pax per session </p>
            <p><strong>RM 100 per pax</strong></p>
          </div>
          <div className="Serv4-card reveal">
            <strong>Website Redesign and Revamp</strong>
            <p>- Improve outdated design</p>
            <p>- Enhance usability</p>
            <p>- Make it easier to read and prepare the documentation</p>
            <p>- New features can be added upon request</p>
            <p><strong>RM 15000 - RM 600000</strong></p>
          </div>
        </div>
      </section>
      
      {/* Products */}
      <section className="projects">
        <div className="projects-info">
          <h3>Previous Projects</h3>
          
        </div>
        <div className="project-gallery">
            <div className="project-card">
              <div className="pic-placeholder">
                <img src="/1.png" alt="Project 1" className="project-img"/>
              </div>
              <p><strong>Hushpitality.Travel</strong></p>
              <p>Commission from Hushpitality Travel Group to make a promotinal websites for their travel package.</p>
            </div>

            <div className="project-card">
              <div className="pic-placeholder">
                <img src="/2.png" alt="Project 1" className="project-img"/>
              </div>
              <p><strong>Cookie.Munch</strong></p>
              <p>A small cookie shop that ask for websites that can help me them to promote and spread news for their products. </p>
            </div>

            <div className="project-card">
              <div className="pic-placeholder">
                <img src="/3.png" alt="Project 1" className="project-img"/>
              </div>
              <p><strong>StudyWithMe.Spot</strong></p>
              <p>An open virtual study space that can be used by student to make study group with stranger that study same subject or just do their revisions.</p>
            </div>
    
        </div>
      </section>

      {/*Contact Us*/ }
      <section className="contact-us reveal"id="contact" >
        <div className="contact-space">
          <div  className="contact-info reveal">
            <h3><strong>Contact Us</strong></h3>
            <p>Interested to bloom your brand with us? Reach out now to make it happened!</p>
            <div className="contact-details">
              <p><strong>📍 Location: </strong> Batu Kawan, Pulau Pinang</p>
              <p><strong>✉️ Email: </strong> hello@webloomstudio.com</p>
              <p><strong>LinkedIn: </strong> WeBloom Studio</p>
              <p><strong>Instagram: </strong>webloom.studio</p>
              <p><strong>Facebook: </strong>WeBloom Studio</p>
            </div>
          </div>
        </div>

        <form className="contact-form reveal">
          <div className="data-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required/>
          </div>
          <div className="data-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required/>
          </div>
          <div className="data-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell us about your project" required/>
          </div>
            <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
}

const TeamMember = ({name, role, image}) => (
  <div className="team-card">
    <div className="photo-placeholder">
      <img 
        src={`/${image}`} 
        alt={name} 
        className="team-img"
      />
    </div>
    <p><strong>{name}</strong></p>
    <p>{role}</p>
  </div>
);

export default App;
