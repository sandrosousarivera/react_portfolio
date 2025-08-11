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
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto mt-8">
            With over two years in a fast-paced startup environment, I bridge
            technical expertise and strategic thinking. Leading projects from
            concept to launch while aligning product vision with business goals.
            I specialize in React, Tailwind CSS, and modern UI/UX design,
            supported by strong skills in cloud architectures, AI-driven
            development, and performance optimization.
          </p>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto mt-4">
            I thrive on transforming complex ideas into tangible & intuitive
            solutions, leveraging AI as a core enabler to accelerate delivery,
            improve decision-making, and unlock innovative solutions. My
            background in the retail industry sharpens my understanding of user
            behavior and market dynamics, allowing me to deliver products that
            are both user-focused and business-driven.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Key Strengths */}
          <div>
            <h3 className="text-2xl font-bold text-blue dark:text-white mb-4">
              Key Strengths
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-silver space-y-2">
              <li>Full-cycle product development—from concept to launch</li>
              <li>
                Cloud expertise: AWS, Google Cloud, and serverless architectures
              </li>
              <li>AI integration & prompt engineering for rapid innovation</li>
              <li>Small team leadership & stakeholder communication</li>
              <li>Strategic product planning & feature roadmapping</li>
              <li>Macroeconomics & business strategy for market alignment</li>
            </ul>
          </div>

          {/* Right Column - Icon Cards */}
          <div className="relative">
            <div className="bg-gradient-to-br from-golden to-carmin dark:from-dark-golden dark:to-dark-carmin p-1 rounded-xl">
              <div className="bg-white dark:bg-dark-blue rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-golden dark:bg-dark-golden rounded-xl flex items-center justify-center">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue dark:text-white">
                        Modern Frontend Development
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        Building responsive, accessible, and high-performance
                        web applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-carmin dark:bg-dark-carmin rounded-xl flex items-center justify-center">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue dark:text-white">
                        Performance Optimization
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        Ensuring fast load times and smooth user experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-bottle dark:bg-dark-bottle rounded-xl flex items-center justify-center">
                      <Palette className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue dark:text-white">
                        UX/UI Excellence
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        Crafting intuitive and visually appealing user
                        interfaces.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-silver dark:bg-dark-silver rounded-xl flex items-center justify-center">
                      <Wrench className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue dark:text-white">
                        Sustainable Development
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        Building scalable and maintainable solutions for the
                        long term.
                      </p>
                    </div>
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
