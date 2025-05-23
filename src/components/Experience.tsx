import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: 'FULL STACK DEVELOPER',
    company: 'TCG DigitaL',
    duration: 'Feb 2022 - Nov 2024',
    location: 'Kolkata, India',
    achievements: [
      'Collaborated with a prestigious US client on the DXHUB developer team, driving core product development and system enhancements in an Agile environment.',
      'Designed and developed dynamic and reusable UI components using React.js and Next.js, including nested breadcrumbs, pagination, and dynamic forms, resulting in an 80% improvement in UI performance.',
      'Spearheaded the implementation of multiple product features, ensuring seamless CI/CD deployment using industry best practices.',
      'Built an Application Tracking System form for healthcare enrollment using React and Redux, reducing form submission errors by 60%.',
      'Developed and optimized the end-to-end Node.js APIs for enrollment flow, efficiently processing more than 2 million+ data points per day with 85% reduction in server response time.',
      'Created and maintained Spring Boot microservices, delivering scalable REST APIs for multi-tenant architecture support in the core product.',
      'Integrated Adobe Experience Manager (AEM) for dynamic content retrieval, ensuring a seamless transition with zero downtime.'
    ],
    skills: ['React.js', 'Java', 'Node.js', 'Next.js', 'Redux', 'AEM', 'AWS'],
    Expereince_Letter_link: "https://drive.google.com/file/d/1Zud7V3qEAFG_QMKXIZi8gWdyRQJeRx3z/view?usp=sharing"
  },
  {
    title: 'ML INTERN',
    company: 'NEURON.AI',
    duration: 'Aug 2021 - Nov 2021',
    location: 'Remote',
    achievements: [
      'Gained experience in developing end-to-end machine learning systems, from requirement analysis to collecting data and implementing feature engineering techniques.',
      'Processed 100,000+ rows of customer data with 25% improved model accuracy',
      'Achieved approximately 85% prediction accuracy in identifying potential customers using Gradient Boosting models.'
    ],
    skills: ['Machine Learning', 'Data Analysis', 'Python', 'Feature Engineering'],
    Expereince_Letter_link: "https://drive.google.com/file/d/1KcjboOm4yFS0me2SE7CRqtuMe4zY7K6X/view?usp=sharing"
  }
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <ScrollAnimation
      animation="fade-in"
      delay={index * 200}
      className="mb-12"
    >
      <div
        className={cn(
          "glass-card p-6 md:p-8 rounded-xl relative",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple/10 before:to-transparent before:opacity-70 before:-z-10",
          "hover:border-purple/30 transition-all duration-300"
        )}
      >
        {experience.Expereince_Letter_link && (
          <a
            href={experience.Expereince_Letter_link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 text-xs bg-purple text-white px-3 py-1 rounded-bl-xl hover:bg-purple/80 transition-all"
          >
            View Cert
          </a>
        )}

        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-heading font-semibold text-gradient">{experience.title}</h3>
            <h4 className="text-lg font-medium text-white">{experience.company}</h4>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <span className="text-muted-foreground">{experience.duration}</span>
            <p className="text-muted-foreground">{experience.location}</p>
          </div>
        </div>

        <ul className="space-y-3 mt-4 list-disc list-inside text-muted-foreground">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="pl-2">
              <span className="text-purple-light">∙</span> {achievement}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-dark-300 text-purple-light text-xs px-3 py-1 rounded-full border border-purple/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient text-center">
            Work Experience
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My professional journey as a Full Stack Developer and ML practitioner
          </p>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
