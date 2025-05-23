
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import { cn } from '@/lib/utils';

const contactInfo = {
  email: 'nsoubhagya264@gmail.com',
  phone: '7978727140',
  linkedin: 'Soubhagya Nayak',
  github: 'Soubhagya264',
  leetcode: 'Soubhagya264'
};

const ContactItem = ({ icon, label, value, link }: { 
  icon: React.ReactNode, 
  label: string, 
  value: string,
  link?: string
}) => {
  return (
    <div className="flex items-center mb-6">
      <div className="text-purple mr-4">
        {icon}
      </div>
      <div>
        <p className="text-muted-foreground text-sm mb-1">{label}</p>
        {link ? (
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white hover:text-purple transition-colors flex items-center gap-2"
          >
            {value}
            <ExternalLink size={14} />
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient text-center">
            Get In Touch
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </ScrollAnimation>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollAnimation>
              <div className={cn(
                "glass-card p-6 md:p-8 rounded-xl",
                "border border-white/5 hover:border-purple/20 transition-all h-full"
              )}>
                <h3 className="text-xl font-heading font-semibold mb-6 text-gradient">
                  Contact Information
                </h3>
                
                <ContactItem 
                  icon={<Mail size={20} />} 
                  label="Email" 
                  value={contactInfo.email} 
                  link={`mailto:${contactInfo.email}`}
                />
                
                <ContactItem 
                  icon={<Phone size={20} />} 
                  label="Phone" 
                  value={contactInfo.phone} 
                  link={`tel:${contactInfo.phone}`}
                />
                
                <ContactItem 
                  icon={<Linkedin size={20} />} 
                  label="LinkedIn" 
                  value={contactInfo.linkedin} 
                  link={`https://linkedin.com/in/${contactInfo.linkedin.toLowerCase().replace(' ', '-')}`}
                />
                
                <ContactItem 
                  icon={<Github size={20} />} 
                  label="GitHub" 
                  value={contactInfo.github} 
                  link={`https://github.com/${contactInfo.github}`}
                />

                <div className="mt-10">
                  <p className="text-muted-foreground mb-4">
                    I'm currently open to new opportunities and collaborations.
                    Feel free to reach out if you're interested in working together!
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className={cn(
                "glass-card p-6 md:p-8 rounded-xl",
                "border border-white/5 hover:border-purple/20 transition-all h-full"
              )}>
                <h3 className="text-xl font-heading font-semibold mb-6 text-gradient">
                  Send A Message
                </h3>
                
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-dark-300 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-dark-300 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-dark-300 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple hover:bg-purple-dark text-white font-medium py-3 px-6 rounded-md transition-colors mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
