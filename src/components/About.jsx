import React from "react";
import { Element } from "react-scroll";
import ProfileImage from "../assets/images/profile.jpeg";

const About = () => {
  return (
    <Element name="about">
      <section
        id="about"
        className="px-8 py-8 md:px-24 flex flex-col md:flex-row items-center justify-center"
      >
        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8 flex-shrink-0">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-sm mx-auto h-96 md:h-[48rem] lg:h-[52rem] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
          <div className="text-lg">
            <ul className="list-disc pl-8 mt-4">
              <li>
                Trained at <span className="font-bold italic">Cornell SC Johnson College of Business</span> and equipped with a strong <span className="font-bold italic">mathematics background</span> from the University of Delhi.
              </li>
              <li>
                A dynamic financial professional with a proven track record of delivering transformative results.
              </li>
              <li>
                Specializes in turning complex data into strategic, actionable insights, using advanced financial modeling and valuation techniques.
              </li>
              <li>
                Expertise includes developing advanced cash flow models, performing detailed DCF valuations, and optimizing investment strategies, driving multi-million-dollar improvements.
              </li>
              <li>
                <span className="font-bold italic">CFA Level 2 Candidate</span> (May 2024), deeply focused on portfolio management, risk assessment, and financial strategy.
              </li>
              <li>
                Entrepreneurial experience scaling innovative platforms to significant market impact, blending technology and finance.
              </li>
              <li>
                Passionate about leveraging cutting-edge tools to revolutionize financial analysis and drive sustainable growth.
              </li>
              <li>
                Excited to bring analytical rigor, creative problem-solving, and strategic vision to a forward-thinking firm, making an immediate and lasting impact.
              </li>
            </ul>
          </div>
          <div className="pt-8 text-center">
            <a
              href="https://drive.google.com/file/d/19L3s9Y3ixTD-X9UgJgCduqbzBJ8aepry/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-cornell hover:bg-cornellDark text-white font-semibold py-2 px-4 rounded w-full sm:w-auto">
                Download My Resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
