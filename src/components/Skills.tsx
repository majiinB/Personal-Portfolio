import React, { ComponentType } from "react";
import { Code, Database, Cloud, Terminal } from "lucide-react";
import {
  SiExpress,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiMariadb,
  SiMysql,
  SiN8N,
  SiVercel,
  SiPostman,
  SiAndroidstudio,
  SiPycharm,
  SiIntellijidea,
  SiReact,
  SiVite,
  SiOpenai,
  SiGooglegemini,
  SiLangchain,
  SiXampp,
} from "react-icons/si";

import {
  TbBrandCSharp,
  TbBrandVisualStudio,
  TbBrandVscode,
} from "react-icons/tb";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaPhp,
} from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: [
        { name: "C#", icon: TbBrandCSharp },
        { name: "CSS", icon: FaCss3 },
        { name: "Dart", icon: FaDartLang },
        { name: "Html", icon: FaHtml5 },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "PHP", icon: FaPhp },
        { name: "Python", icon: SiPython },
        { name: "React", icon: SiReact },
        { name: "Java", icon: FaJava },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Express.js", icon: SiExpress },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Flutter", icon: FaFlutter },
        { name: "LangChain", icon: SiLangchain },
        { name: "Next.Js", icon: SiNextdotjs },
        { name: "Spring", icon: SiSpring },
        { name: "Vite", icon: SiVite },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "Fire Store", icon: SiFirebase },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MariaDB", icon: SiMariadb },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        { name: "Docker", icon: FaDocker },
        { name: "Functions", icon: SiFirebase },
        { name: "n8n", icon: SiN8N },
        { name: "Vercel", icon: SiVercel },
      ],
    },
    {
      title: "Tools & Others",
      icon: Terminal,
      skills: [
        { name: "Android Studio", icon: SiAndroidstudio },
        { name: "Figma", icon: FaFigma },
        { name: "Gemini API", icon: SiGooglegemini },
        { name: "Git", icon: FaGit },
        { name: "GitHub", icon: FaGithub },
        { name: "IntelliJ", icon: SiIntellijidea },
        { name: "OpenAI API", icon: SiOpenai },
        { name: "PostMan", icon: SiPostman },
        { name: "PyCharm", icon: SiPycharm },
        { name: "VS Code", icon: TbBrandVscode },
        { name: "Visual Studio", icon: TbBrandVisualStudio },
        { name: "Xampp", icon: SiXampp },
      ],
    },
  ];

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

        <div className="grid md:grid-row-4 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-neutral-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
            {[
              "ClickUp",
              "Discord",
              "Google Docs",
              "Google Sheets",
              "Lucidchart",
              "REST",
              "RPC",
              "JWT",
              "OAuth",
              "NPM",
              "Composer",
              "Google Cloud",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-primary/20 text-white px-4 py-2 rounded-full text-center font-mono text-sm hover:bg-primary/30 transition-colors duration-300"
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
