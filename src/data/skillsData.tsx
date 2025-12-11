import { Code, Database, Cloud, Terminal, Brain } from "lucide-react";
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
  SiXampp,
  SiJavascript,
  SiGooglecloud,
  SiLangchain,
  SiGithubactions,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
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
} from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";

export const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "C#", icon: TbBrandCSharp },
      { name: "Dart", icon: FaDartLang },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
    ],
  },

  {
    title: "Frameworks & Libraries",
    icon: Code,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flutter", icon: FaFlutter },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Spring", icon: SiSpring },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "TensorFlow / Keras", icon: SiTensorflow },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "LangChain", icon: SiLangchain },
      { name: "Gemini API", icon: SiGooglegemini },
      { name: "OpenAI API", icon: SiOpenai },
    ],
  },

  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firestore", icon: SiFirebase },
    ],
  },

  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Google Cloud Platform", icon: SiGooglecloud },
      { name: "Cloud Run", icon: SiGooglecloud },
      { name: "Pub/Sub", icon: SiGooglecloud },
      { name: "Docker", icon: FaDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "n8n", icon: SiN8N },
      { name: "CI/CD (GitHub Actions)", icon: SiGithubactions },
    ],
  },

  {
    title: "Tools",
    icon: Terminal,
    skills: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "IntelliJ", icon: SiIntellijidea },
      { name: "PyCharm", icon: SiPycharm },
      { name: "VS Code", icon: TbBrandVscode },
      { name: "Visual Studio", icon: TbBrandVisualStudio },
      { name: "XAMPP", icon: SiXampp },
    ],
  },
];

export const otherTech = [
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
  "Webhooks",
  "Event-driven systems",
  "Background job processing",
];
