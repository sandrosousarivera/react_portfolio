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
            I am a mid-level Product Owner & Frontend Specialist with over two
            years of hands-on experience in a dynamic startup environment. My
            expertise spans React, Tailwind CSS, Git, Figma, and cutting-edge
            AI-powered tools for design, development, and process optimization.
          </p>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto mt-4">
            I combine UI/UX design excellence with strategic product thinking,
            delivering seamless user experiences while managing timelines,
            coordinating stakeholders, and iterating rapidly on feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div>
            <div
              className="text-gray-600 dark:text-silver leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t("about.description2"),
              }}
            />

            <div className="flex flex-wrap gap-4 pt-4">
              {technologies.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </div>

          {/* Right Column - Skills Cards */}
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
                        <TranslatedText translationKey="about.focus" />
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        <TranslatedText translationKey="about.focus.desc" />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-carmin dark:bg-dark-carmin rounded-xl flex items-center justify-center">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue dark:text-white">
                        <TranslatedText translationKey="about.performance" />
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        <TranslatedText translationKey="about.performance.desc" />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-bottle dark:bg-dark-bottle rounded-xl flex items-center justify-center">
                      <Palette className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue dark:text-white">
                        <TranslatedText translationKey="about.design" />
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        <TranslatedText translationKey="about.design.desc" />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-silver dark:bg-dark-silver rounded-xl flex items-center justify-center">
                      <Wrench className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue dark:text-white">
                        <TranslatedText translationKey="about.maintenance" />
                      </h3>
                      <p className="text-gray-600 dark:text-silver">
                        <TranslatedText translationKey="about.maintenance.desc" />
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
