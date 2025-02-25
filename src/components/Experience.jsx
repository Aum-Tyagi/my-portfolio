import React from "react";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="experience">
      <section id="experience" className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>

          {/* Experience Cards */}
          <div className="grid gap-8 px-4 md:px-12 lg:px-24">
            
            {/* Corporate Investment Analyst, AAKAR GROUP */}
            <div>
              <h3 className="font-bold mt-2">Corporate Investment Analyst, AAKAR GROUP</h3>
              <p className="font-semibold italic">
                Evaluated large-scale investments and optimized financial strategies for corporate growth.
              </p>
              <p className="italic text-sm text-cornellLight">June 2023 – July 2024, Delhi</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Developed free-cash flow models using time-series analysis to assess investment feasibility.</li>
                <li>Optimized cash flow cycles, increasing subcontractor payments by $2M through strategic fund allocation.</li>
                <li>Conducted DCF and NAV valuations to assess real estate and REIT investments, aligning risk-return objectives.</li>
              </ul>
            </div>

            {/* Investment Analyst Intern, AT INFO SOLUTIONS PVT LTD */}
            <div>
              <h3 className="font-bold mt-2">Investment Analyst Intern, AT INFO SOLUTIONS PVT LTD</h3>
              <p className="font-semibold italic">
                Focused on financial modeling, investment analysis, and profitability improvement.
              </p>
              <p className="italic text-sm text-cornellLight">August 2022 – January 2023, Delhi</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Maintained cash flow cycles, optimizing inventory turnover ratios and increasing profitability by $500K.</li>
                <li>Developed financial models to evaluate new product line investments, reducing operational costs by $300K.</li>
              </ul>
            </div>

            {/* Corporate Finance Intern, BINARY COMPUTERS SYSTEMS */}
            <div>
              <h3 className="font-bold mt-2">Corporate Finance Intern, BINARY COMPUTERS SYSTEMS</h3>
              <p className="font-semibold italic">
                Assisted in pricing strategies, financial analysis, and cost optimization in the IT sector.
              </p>
              <p className="italic text-sm text-cornellLight">August 2021 – January 2022, Delhi</p>
              <ul className="list-disc pl-5 md:pl-8 mt-4">
                <li>Designed pricing strategies for Dell & HP products, increasing revenue by 5% ($705K).</li>
                <li>Reduced annual inventory carrying costs by 10% ($620K) through Economic Value Added (EVA) and margin analysis.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
