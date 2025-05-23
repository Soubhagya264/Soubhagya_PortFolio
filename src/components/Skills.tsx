import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { cn } from '@/lib/utils';
import { Progress } from './ui/progress';
import { BadgeCheck, Award, TrendingUp, ChartBar } from 'lucide-react';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    name: 'Programming',
    icon: <TrendingUp className="h-5 w-5 text-purple" />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
    ]
  },
  {
    name: 'Web Technology',
    icon: <ChartBar className="h-5 w-5 text-purple-light" />,
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 95 },
      { name: 'Redux', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'Angular', level: 75 },
    ]
  },
  {
    name: 'Backend Framework',
    icon: <Award className="h-5 w-5 text-purple-dark" />,
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Express', level: 90 },
      { name: 'Django', level: 75 },
    ]
  },
  {
    name: 'Database',
    icon: <BadgeCheck className="h-5 w-5 text-purple" />,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 90 },
      { name: 'Redis', level: 80 },
    ]
  },
  {
    name: 'AI and ML',
    icon: <TrendingUp className="h-5 w-5 text-purple-light" />,
    skills: [
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'OpenCV', level: 75 },
      { name: 'CNN', level: 70 },
      { name: 'RNN', level: 70 },
      { name: 'Transformers', level: 65 },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-dark to-dark-300 relative">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-dark/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-2 text-gradient text-center">
            My Skills
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technologies and tools I've mastered through my journey
          </p>
        </ScrollAnimation>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimation
              key={category.name}
              delay={categoryIndex * 150}
              className="flex-1"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/5 bg-dark-200/50 backdrop-blur-sm hover:border-purple/20 transition-all">
                {/* Category Header */}
                <div className="flex items-center gap-3 p-6 border-b border-white/5">
                  <div className="p-2 rounded-full bg-dark-300/80">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-heading font-medium text-gradient">
                    {category.name}
                  </h3>
                </div>

                {/* Scrollable Skills List */}
                <div
                  className="p-6 space-y-4 overflow-y-auto"
                  style={{ maxHeight: '220px' }}  // adjust height as needed
                >
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs bg-dark-300/70 text-purple">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-1.5 bg-dark-300"
                        style={{
                          '--progress-background': 'rgba(155, 135, 245, 0.15)',
                        } as React.CSSProperties}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-purple/80 to-purple via-purple-light transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </Progress>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
