import React, { useState } from "react";
import { Element } from "react-scroll";

const Education = () => {
  // State for toggling expanded course lists
  const [showMoreMPS, setShowMoreMPS] = useState(false);
  const [showMoreBSc, setShowMoreBSc] = useState(false);
  const [showMoreCFA, setShowMoreCFA] = useState(false);
  
  // Course Lists
  const fullMPSCourses =
  "Investment Banking, Investments & Portfolio Management, Financial Modeling, Managerial Accounting, Artificial Intelligence and Public Policy, Advanced Financial Statement Analysis, Systems and Analytics, Behavioural Finance, Leadership, Negotiations, Data Modelling, Managerial Economics, Macroeconomics, Marketing Strategy, Entrepreneurship, Management Communications, Data Modeling, Mergers and Acquisitions - Accounting, Modeling and Evaluations of Deals, Strategy, Strategies for sustainability, Operations Management, ";

  const fullBScCourses =
    "Mathematical Finance, Probability Theory & Statistics, PARTIAL DIFFERENTIAL EQUATIONS (INCLUDING PRACTICALS), RIEMANN INTEGRATION & SERIES OF FUNCTIONS, RING THEORY & LINEAR ALGEBRA-I, COMPUTER ALGEBRA SYSTEMS AND RELATED SOFTWARE, METRIC SPACES, GROUP THEORY-II, NUMERICAL ANALYSIS (B.SC. HONS MATHEMATICS) , COMPLEX ANALYSIS (INCLUDING PRACTICALS), RING THEORY AND LINEAR ALGEBRA-II, Linear Programming and Applications, BASICS OF ACCOUNTING, CALCULUS, ALGEBRA, ENVIRONMENTAL SCIENCE, INTRODUCTORY MACROECONOMICS, REAL ANALYSIS, DIFFERENTIAL EQUATIONS, English-A, MONEY AND BANKING, THEORY OF REAL FUNCTIONS, GROUP THEORY-I, MULTIVARIATE CALCULUS (INCLUDING PRACTICALS), LATEX AND HTML (ONLY FOR B.SC), Mathematical Finance, Probability Theory, Macroeconomics, Linear Algebra, Multivariate Calculus.";

  const fullCFACourses =
    "Portfolio Management, Fixed Income, Equity Investments, Derivatives, Alternative Investment, Financial Statements Analysis, Ethics, Corporate Issuers, Quantitative Methods, Economics.";

  // Truncated Versions
  const truncatedMPSCourses = fullMPSCourses.length > 80 
    ? fullMPSCourses.substring(0, 80) + "..."
    : fullMPSCourses;

  const truncatedBScCourses = fullBScCourses.length > 80 
    ? fullBScCourses.substring(0, 80) + "..."
    : fullBScCourses;

  const truncatedCFACourses = fullCFACourses.length > 80 
    ? fullCFACourses.substring(0, 80) + "..."
    : fullCFACourses;

  return (
    <Element name="education">
      <section id="education" className="py-16 bg-cornell text-white text-center">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

          {/* Education Details */}
          <div className="grid gap-8 text-base md:text-lg max-w-3xl mx-auto">
            
            {/* Master of Professional Studies in Management (STEM) */}
            <div>
              <h3 className="font-bold text-white">
                Master of Professional Studies in Management (STEM)
              </h3>
              <p className="font-semibold text-gray-200">
                Cornell SC Johnson College of Business, 2025
              </p>
              <p className="italic text-gray-300 leading-relaxed">
                {showMoreMPS ? fullMPSCourses : truncatedMPSCourses}
              </p>
              {fullMPSCourses.length > 80 && (
                <button
                  onClick={() => setShowMoreMPS(!showMoreMPS)}
                  className="text-gray-300 italic hover:underline focus:outline-none"
                >
                  {showMoreMPS ? " See Less" : " See More"}
                </button>
              )}
            </div>
            <hr className="h-px bg-gray-400 border-0 md:hidden" />

            {/* Bachelor of Science in Mathematics */}
            <div>
              <h3 className="font-bold text-white">
                Bachelor of Science in Mathematics
              </h3>
              <p className="font-semibold text-gray-200">
                Delhi College of Arts and Commerce, University of Delhi, 2023
              </p>
              <p className="italic text-gray-300 leading-relaxed">
                {showMoreBSc ? fullBScCourses : truncatedBScCourses}
              </p>
              {fullBScCourses.length > 80 && (
                <button
                  onClick={() => setShowMoreBSc(!showMoreBSc)}
                  className="text-gray-300 italic hover:underline focus:outline-none"
                >
                  {showMoreBSc ? " See Less" : " See More"}
                </button>
              )}
            </div>
            <hr className="h-px bg-gray-400 border-0 md:hidden" />

            {/* CFA Level 2 Candidate */}
            <div>
              <h3 className="font-bold text-white">CFA Level 2 Candidate</h3>
              <p className="font-semibold text-gray-200">
                CFA Institute, May 2024
              </p>
              <p className="italic text-gray-300 leading-relaxed">
              {showMoreCFA ? fullCFACourses : truncatedCFACourses}
              </p>
              {fullCFACourses.length > 80 && (
                <button
                  onClick={() => setShowMoreCFA(!showMoreCFA)}
                  className="text-gray-300 italic hover:underline focus:outline-none"
                >
                  {showMoreCFA ? " See Less" : " See More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Education;
