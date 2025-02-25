import React from 'react';
import { Element } from 'react-scroll';

const Skills = () => {
  const skills = [
    { name: 'Financial Modeling', percentage: 95 },
    { name: 'Portfolio Management', percentage: 90 },
    { name: 'Investment Risk Analysis', percentage: 92 },
    { name: 'Python', percentage: 90 },
    { name: 'SQL', percentage: 85 },
    { name: 'Excel', percentage: 95 },
    { name: 'Power BI & Tableau', percentage: 85 },
    { name: 'Bloomberg Terminal', percentage: 80 },
    { name: 'Performance Attribution', percentage: 88 },
    { name: 'Fixed Income Strategies', percentage: 85 },
    { name: 'Scenario Analysis & Risk Mitigation', percentage: 90 },
  ];

  return (
    <Element name="skills">
      <section id="skills" className="bg-cornell text-white py-16 px-24 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-4">
                <p className="w-36">{skill.name} :</p>
                <div className="relative flex items-center flex-grow mx-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gray-500 rounded-full transition-width duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <p className="sm:cursor-pointer absolute top-0 right-0 mr-2 text-xs font-extrabold text-gray-700 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {skill.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
