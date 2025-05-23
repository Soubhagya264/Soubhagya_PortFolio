
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-dark-100 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-gradient font-heading font-bold text-2xl">SN</span>
            <p className="text-muted-foreground mt-2">
              Full Stack Developer & ML Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/Soubhagya264" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="https://leetcode.com/Soubhagya264" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-purple transition-colors"
              aria-label="LeetCode"
            >
              LeetCode
            </a>
            <a 
              href="https://linkedin.com/in/soubhagya-nayak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-purple transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
          
          <div>
            <a 
              href="#home" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-300 text-muted-foreground hover:bg-purple hover:text-white transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Soubhagya Nayak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
