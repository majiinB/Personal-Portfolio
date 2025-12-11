import React, { ComponentType } from "react";
import { otherTech, skillCategories } from "../data/skillsData";

const Skills: React.FC = () => {
  type DynamicIconProps = {
    icon: ComponentType<{ className?: string }>;
    className?: string;
  };

  const DynamicIcon: React.FC<DynamicIconProps> = ({
    icon: IconBase,
    className,
  }) => {
    return <IconBase className={className} />;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-accent mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-subtle-text max-w-3xl mx-auto leading-relaxed">
            Here's my technical toolkit - technologies and frameworks I use to
            build robust backend solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-neutral-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-dark-accent">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center space-y-2 w-24"
                  >
                    <DynamicIcon
                      icon={skill.icon as ComponentType<{ className?: string }>}
                      className="text-primary text-3xl"
                    />
                    <span className="text-xs text-subtle-text text-center truncate w-full">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-dark-accent rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherTech.map((tech, index) => (
              <div
                key={index}
                className="bg-primary/20 text-white px-4 py-2 rounded-full text-center font-mono text-sm hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(16.666%-0.833rem)]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
