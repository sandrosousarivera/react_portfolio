import React from "react";
import { Target, Zap, Palette, Wrench } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import TranslatedText from "../atoms/TranslatedText";
import Chip from "../atoms/Chip";

const About: React.FC = () => {
  const { t } = useLanguage();

  const technologies = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "WordPress",
    "SEO",
    "Blockchain",
    "Cloud",
    "AI",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-4xl mx-auto mt-8">
            With over two years in a fast-paced startup environment, I bridge
            technical expertise and strategic thinking—leading projects from
            concept to launch while aligning product vision with business goals.
            I specialize in React, Tailwind CSS, and modern UI/UX design,
            supported by strong skills in cloud architectures, AI-driven
            development, and performance optimization.
          </p>
          <p className="text-lg text-gray-600 dark:text-silver max-w-4xl mx-auto mt-4">
            I thrive on transforming complex ideas into intuitive,
            high-performance applications, leveraging AI as a core enabler to
            accelerate delivery, improve decision-making, and unlock innovative
            solutions. My background in the retail industry sharpens my
            understanding of user behavior and market dynamics, allowing me to
            deliver products that are both user-focused and business-driven.
          </p>
        </div>

        {/* Key Strengths and Focus Areas Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Key Strengths */}
            <div>
              <h3 className="text-2xl font-bold text-blue dark:text-white mb-6 text-center">
                Key Strengths
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-silver">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full-cycle product development, from concept to launch
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Frontend mastery and responsive UX/UI
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cloud expertise
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AI integration & prompt engineering for rapid innovation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Team leadership & stakeholder communication
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strategic product planning & feature roadmapping
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Macroeconomics & business strategy for market alignment
                </li>
              </ul>
            </div>

            {/* Focus Areas */}
            <div>
              <h3 className="text-2xl font-bold text-blue dark:text-white mb-6 text-center">
                Focus Areas
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-silver">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-carmin dark:bg-dark-carmin rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Modern Frontend Development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-carmin dark:bg-dark-carmin rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Performance Optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-carmin dark:bg-dark-carmin rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UX/UI Excellence
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-carmin dark:bg-dark-carmin rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sustainable Development
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-12 justify-center">
            {technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </div>

        {/* Skills Cards - Full Width */}
        <div className="w-full">
          <div className="bg-gradient-to-br from-golden to-carmin dark:from-dark-golden dark:to-dark-carmin p-1 rounded-xl">
            <div className="bg-white dark:bg-dark-blue rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-golden dark:bg-dark-golden rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Target className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      Collaboration
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      Fast communication with stakeholders & teams.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-carmin dark:bg-dark-carmin rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Zap className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      Project Management
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      Efficient management of timelines & resources.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-bottle dark:bg-dark-bottle rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Palette className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      Design
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      Intuitive, simple and attractive UX/UI.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-silver dark:bg-dark-silver rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Wrench className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      Maintenance
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      Clean, mantainable and scalable code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
