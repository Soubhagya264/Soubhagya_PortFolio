
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import ScrollAnimation from './ScrollAnimation';
import ParticleBackground from './ParticleBackground';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-300/20 to-dark pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-dark/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ScrollAnimation>
              <div className="inline-block px-4 py-1 rounded-full bg-dark-300/80 backdrop-blur-sm border border-white/5 mb-6">
                <p className="text-purple text-sm font-medium">Hello, my name is</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="text-foreground">Soubhagya</span>{' '}
                <span className="text-gradient">Nayak</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={400}>
              <h2 className="text-2xl md:text-3xl font-heading text-muted-foreground mb-6">
                <AnimatedText text="Full Stack Developer & ML Enthusiast" />
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation delay={600}>
              <p className="text-lg text-muted-foreground max-w-lg mb-8 border-l-2 border-purple/50 pl-4">
                I build exceptional digital experiences with modern technologies,
                from responsive front-end interfaces to scalable back-end systems.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={800}>
              <div className="flex flex-wrap gap-6">
                <a 
                  href="#projects" 
                  className="relative overflow-hidden group bg-gradient-to-br from-purple to-purple-dark text-white px-6 py-3 rounded-md shadow-lg shadow-purple/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-br from-purple-dark to-purple opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
                <a 
                  href="#contact" 
                  className="relative overflow-hidden group bg-dark-300/50 backdrop-blur-sm border border-purple/20 hover:border-purple/40 text-purple hover:text-white px-6 py-3 rounded-md transition-all shadow-lg shadow-purple/5"
                >
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-gradient-to-br from-purple to-purple-dark opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={1000}>
              <div className="flex items-center mt-12 space-x-6">
                <a href="https://github.com/Soubhagya264" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-all hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/Soubhagya264" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-all hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/soubhagya-nayak/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-all hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </ScrollAnimation>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <ScrollAnimation animation="fade-in" delay={300}>
              <div className="relative">
                {/* Enhanced decorative elements */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple/20 via-purple-dark/20 to-purple-light/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple to-purple-dark rounded-full opacity-30 animate-pulse"></div>
                
                {/* Profile picture with enhanced styling */}
                <Avatar className="h-64 w-64 md:h-96 md:w-96 border-4 border-purple/30 shadow-2xl shadow-purple/20 relative z-10">
                  <AvatarImage 
                    src="/lovable-uploads/fb5a1238-3f8a-40b7-9351-609064bdfb18.png" 
                    alt="Soubhagya Nayak"
                    className="object-cover scale-110"
                  />
                  <AvatarFallback className="bg-dark-200 text-6xl font-bold text-gradient">
                    SN
                  </AvatarFallback>
                </Avatar>
                
                {/* Enhanced floating decorative elements */}
                <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-br from-purple to-purple-dark blur-sm opacity-70 animate-float"></div>
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-br from-purple-light to-purple blur-sm opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
                <div className="absolute top-1/2 -left-8 h-8 w-8 rounded-full bg-gradient-to-br from-purple-dark to-purple-light blur-sm opacity-60 animate-float" style={{ animationDelay: "1.5s" }}></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
