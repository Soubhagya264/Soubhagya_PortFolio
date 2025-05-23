import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { cn } from '@/lib/utils';

const education = [
  {
    degree: 'B.Tech in Computer Science and IT',
    institution: 'CV Raman Global University',
    location: 'Odisha, India',
    duration: 'June 2022',
    courses: [
      'Web Development',
      'Data Structure and Algorithm',
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Operating System',
      'Database Management'
    ],
    link: "https://drive.google.com/file/d/1nT-GZErLd4ls8YVrOxP0V3YQV-LSl-pc/view?usp=sharing"
  },
  {
    degree: 'Diploma in IT Architecture',
    institution: 'C-DAC',
    location: 'Pune',
    duration: '320hr Part-time course',
    courses: [
      'IT Infrastructure',
      'Java Full Stack',
      'Effective Communication',
      'Web Technologies'
    ],
    link: "https://drive.google.com/file/d/1xnQVY_ygPgXA5VSSXZtlCaVpjF1GJBcD/view?usp=sharing"
  }
];

const certifications = [
  {
    title: 'GATE 2024 Qualified',
    specialization: 'Data Science and Artificial Intelligence',
    link: "https://drive.google.com/file/d/1cs7-NglM6lGcLYWCi-o0892bEwRQNZtk/view?usp=sharing"
  },
  {
    title: 'Full Stack Developer',
    specialization: 'Software Development',
    link: 'https://drive.google.com/file/d/1KAXD95-DPcg6ZbSue30q9wG8vT_dTjbW/view?usp=sharing'
  },
  {
    title: 'Python For Data Science',
    specialization: 'Python Programming',
    link: 'https://courses.cognitiveclass.ai/certificates/fe6fb39eb6614dd49f0fea4e12a055e8'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient text-center">
            Education
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My academic background and qualifications
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 200} className="mb-10 relative">
              <div className={cn(
                "glass-card p-6 md:p-8 rounded-xl relative",
                "border border-white/5 hover:border-purple/20 transition-all"
              )}>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-0 right-0 text-xs bg-purple text-white px-3 py-1 rounded-bl-xl hover:bg-purple/80 transition-all"
                  >
                    View Cert
                  </a>
                )}
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gradient">{item.degree}</h3>
                    <h4 className="text-lg text-white">{item.institution}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="text-muted-foreground">{item.location}</p>
                    <p className="text-muted-foreground">{item.duration}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-white mb-3">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, i) => (
                      <span
                        key={i}
                        className="bg-dark-300 text-purple-light text-xs px-3 py-1 rounded-full border border-purple/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}

          {certifications.length > 0 && (
            <>
              <ScrollAnimation delay={600} className="mb-8 mt-16">
                <h3 className="text-2xl font-heading font-semibold text-gradient text-center">
                  Achievements & Certifications
                </h3>
              </ScrollAnimation>

              {certifications.map((cert, index) => (
                <ScrollAnimation key={index} delay={index * 200 + 800} className="mb-6 relative">
                  <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-purple/20 transition-all relative">
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 right-0 text-xs bg-purple text-white px-3 py-1 rounded-bl-xl hover:bg-purple/80 transition-all"
                      >
                        View Cert
                      </a>
                    )}
                    <h4 className="text-lg font-medium text-white mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground">{cert.specialization}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
